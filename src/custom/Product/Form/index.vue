<template>
  <div>
    <a-row>
      <a-col :md="12" :xs="24">
        <a-breadcrumb style="margin: 10px 5px">
          <a-breadcrumb-item>
            <router-link to="/token/">{{ $t('token') }}</router-link>
          </a-breadcrumb-item>
          <a-breadcrumb-item>{{ $t('add') }}</a-breadcrumb-item>
        </a-breadcrumb>
      </a-col>
    </a-row>

    <a-card :title="$t('Forma')">
      <template>
        <a-form-model
          @submit="onSubmit"
          ref="ruleForm"
          :model="product"
          :rules="rules"
          :label-col="labelCol"
          :wrapper-col="wrapperCol"
        >
          <a-row>
            <a-col :md="8" :xs="24" style="padding: 0 15px">
              <a-form-model-item :label="$t('Nomi')" prop="nomi">
                <a-input
                  :placeholder="$t('Nomi')"
                  v-model="product.name"
                />
              </a-form-model-item>
            </a-col>
            <a-col :md="8" :xs="24" style="padding: 0 15px">
              <a-form-model-item :label="$t('Qisqacha tarif')" prop="tarif">
                <a-input
                  :placeholder="$t('Qisqacha tarif')"
                  v-model="product.description"
                />
              </a-form-model-item>
            </a-col>
            <a-col :md="8" :xs="24" style="padding: 0 15px">
              <a-form-model-item :label="$t('Kategoriya')" prop="tarif">
                <a-select
                  :placeholder="$t('Kategoriya')"
                  v-model="product.category_id"
                >
                  <a-select-option v-for="d in categoryData" :key="d.id" :value="d.id">
                    {{ d.name }}
                  </a-select-option>
                </a-select>
              </a-form-model-item>
            </a-col>
            <a-col span="24">
              <a-row>
                <div
                  v-for="(k, index) in product.prices"
                  :key="index">
                  <a-col :xs="24" :md="7" style="padding: 0 15px">
                    <a-form-model-item :label="$t('shop')" prop="shop">
                      <a-input
                        :placeholder="$t('shop')"
                        v-model="product.prices[index].shop" />
                    </a-form-model-item>
                  </a-col>
                  <a-col :xs="24" :md="7" style="padding: 0 15px">
                    <a-form-model-item :label="$t('URL')" prop="url">
                      <a-input
                        :placeholder="$t('url')"
                        v-model="product.prices[index].url" />
                    </a-form-model-item>
                  </a-col>
                  <a-col :xs="24" :md="7">
                    <a-form-model-item :label="$t('price')" prop="price">
                      <a-input
                        type="number"
                        :placeholder="$t('price')"
                        v-model="product.prices[index].price" />
                    </a-form-model-item>
                  </a-col>
                  <a-col :xs="3" :md="3" style="padding: 0 15px">
                    <a-icon
                      v-if="product.prices.length > 1"
                      class="dynamic-delete-button"
                      type="minus-circle-o"
                      @click="() => remove(k, index)"
                    />
                  </a-col>
                </div>
                <a-col :xs="24">
                  <a-form-item>
                    <a-button type="dashed" style="margin: auto auto auto 15px; width: 100%" @click="add">
                      <a-icon type="plus" /> {{ $t('add') }}
                    </a-button>
                  </a-form-item>
                </a-col>
              </a-row>
            </a-col>
            <a-col :span="24" style="padding: 0 15px">
              <a-form-model-item :label="$t('image')">
                <a-upload
                  name="file"
                  list-type="picture-card"
                  class="avatar-uploader"
                  :show-upload-list="false"
                  action="https://migration.track.uz/v1/upload"
                  :before-upload="beforeUploadLogo"
                  @change="handleChangeLogoImage"
                >
                  <img v-if="imageUrlLogo" :src="imageUrlLogo" alt="avatar" />
                  <div v-else>
                    <a-icon :type="loadingLogo ? 'loading' : 'plus'" />
                    <div class="ant-upload-text">
                      {{ $t('upload') }}
                    </div>
                  </div>
                </a-upload>
              </a-form-model-item>
            </a-col>
            <a-col :span="24" style="padding: 0 15px">
              <a-form-model-item>
                <a-button type="primary" html-type="submit" @click="onSubmit">
                  {{ $t('save') }}
                </a-button>
              </a-form-model-item>
            </a-col>
          </a-row>
        </a-form-model>
      </template>
    </a-card>
  </div>
</template>
<script>
import request from '@/utils/request'
import { mapActions } from 'vuex'

function getBase64 (img, callback) {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result))
  reader.readAsDataURL(img)
}
export default {
  data () {
    return {
      productId: this.$route.params.id,
      labelCol: { span: 24 },
      wrapperCol: { span: 24 },
      imageUrlLogo: '',
      loadingLogo: false,
      other: '',
      categoryData: [],
      loading: false,
      product: {
        category_id: null,
        name: null,
        image: null,
        description: null,
        prices: [
          {
            price: null,
            shop: null,
            url: null
          }
        ]
      },
      rules: {
        name: [
          { required: true, message: this.$t('required'), trigger: 'change' }
        ]
      }
    }
  },
  mounted () {
    this.$store.dispatch('getCategories').then(res => {
      this.loading = false
      this.categoryData = res.data
    })
    if (this.productId) this.getProductAttrs(this.productId)
  },
  methods: {
    ...mapActions(['getProduct', 'getCategories']),
    getProductAttrs (product) {
      request({
        url: '/product/' + product,
        method: 'get'
      }).then(response => {
        this.product.description = response.data.description
        this.product.name = response.data.name
        this.product.category_id = response.data.category_id
        this.product.prices = response.data.prices
        this.imageUrlLogo = response.data.image
        this.product.image = response.data.image.split('/')[response.data.image.split('/').length - 1]
      })
    },
    remove (k, index) {
      this.product.prices.splice(index, 1)
      console.log(this.product.prices)
    },

    add () {
      this.product.prices.push({
        duration: null,
        price: null
      })
    },
    handleChangeLogoImage (info, index) {
      if (info.file.status === 'uploading') {
        console.log('aa')
        this.loadingLogo = true
        return
      }
      if (info.file.status === 'done') {
        getBase64(info.file.originFileObj, imageUrl => {
          this.imageUrlLogo = imageUrl
          this.loadingLogo = false
          this.product.image = info.file.response.filename
        })
      }
    },
    beforeUploadLogo (file) {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
      if (!isJpgOrPng) {
        this.$message.error('You can only upload JPG file!')
      }
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isLt2M) {
        this.$message.error('Image must smaller than 2MB!')
      }
      return isJpgOrPng && isLt2M
    },
    onSubmit (e) {
      e.preventDefault()
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          var url = '/product'
          var method = 'post'
          this.product.prices.map((product, index) => {
            this.product.prices[index].price = parseInt(this.product.prices[index].price)
          })
          var data = this.product
          const headers = {
            'Content-Type': 'application/json'
          }
          if (this.productId) {
            method = 'put'
            url = '/product/' + this.productId
          }
          console.log(data)
          request({
              url: url,
              method: method,
              data: data,
              headers: headers
          }).then(res => {
            this.getCategories()
            this.$router.replace('/product/list')
          }).catch(err => {
            if (err) {
              console.log(err)
              this.$message.error(err.response.data.error)
            }
          })
          console.log('valid')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm () {
      this.$refs.ruleForm.resetFields()
    }
  }
}
</script>
<style>
  .dynamic-delete-button {
    cursor: pointer;
    position: relative;
    top: 30px;
    font-size: 24px;
    color: #999;
    transition: all 0.3s;
  }
  .dynamic-delete-button:hover {
    color: #777;
  }
  .dynamic-delete-button[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }
  @media (max-width: 760px) {
    .ant-form-item {
      margin: 0;
    }
  .ant-form-item-label {
    padding-bottom: 4px !important;
  }
  }
  .ant-form-item-control {
    line-height: normal !important;
  }
  @media (max-width: 760px) {
    .ant-form-item {
      margin: 0;
    }
  .ant-form-item-label {
    padding-bottom: 4px !important;
  }
  }
</style>
