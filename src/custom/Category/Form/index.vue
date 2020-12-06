<template>
  <div>
    <a-row>
      <a-col :md="12" :xs="24">
        <a-breadcrumb style="margin: 10px 5px">
          <a-breadcrumb-item>
            <router-link to="/token/">{{ $t('Kategoriya') }}</router-link>
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
          :model="category"
          :rules="rules"
          :label-col="labelCol"
          :wrapper-col="wrapperCol"
        >
          <a-row>
            <a-col :md="12" :xs="24" style="padding: 0 15px">
              <a-form-model-item :label="$t('Kategoriya')" prop="kategoriya">
                <a-input
                  :placeholder="$t('Kategoriya')"
                  v-model="category.name"
                />
              </a-form-model-item>
            </a-col>
            <a-col :span="24" style="padding: 0 15px">
              <a-form-model-item>
                <a-button type="primary" html-type="submit" @click="onSubmit">
                  {{ $t('Saqlash') }}
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

export default {
  data () {
    return {
      categoryId: this.$route.params.id,
      labelCol: { span: 24 },
      wrapperCol: { span: 24 },
      other: '',
      loading: false,
      category: {
        name: '',
        parent_id: null
      },
      rules: {
        name: [
          { required: true, message: this.$t('required'), trigger: 'change' }
        ]
      }
    }
  },
  mounted () {
    if (this.categoryId) this.getCategoryAttrs(this.categoryId)
  },
  methods: {
    ...mapActions(['getCategory', 'getCategories', 'postCategory', 'updateCategory']),
    getCategoryAttrs (category) {
      request({
        url: '/category/' + category,
        method: 'get'
      }).then(response => {
        this.category = response.data
      })
    },
    onSubmit (e) {
      e.preventDefault()
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          var url = '/category'
          var method = 'post'
          var data = this.category
          const headers = {
            'Content-Type': 'application/json'
          }
          if (this.categoryId) {
            method = 'put'
            url = '/category/' + this.categoryId
          }
          request({
              url: url,
              method: method,
              data: data,
              headers: headers
          }).then(res => {
            this.getCategories()
            this.$router.replace('/category/list')
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
