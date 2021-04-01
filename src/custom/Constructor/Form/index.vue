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
    <a-card>
      <a-divider> Details for route js </a-divider>
      <template>
        <a-form-model
          @submit="onSubmit"
          ref="routeForm"
          :model="route"
          :rules="rulesRoute"
          :label-col="labelCol"
          :wrapper-col="wrapperCol"
        >
          <a-row>
            <a-col :md="12" :xs="24" style="padding: 0 15px">
              <a-form-model-item :label="$t('name')" prop="name">
                <a-input
                  :placeholder="$t('name')"
                  v-model="route.name"
                />
              </a-form-model-item>
            </a-col>
            <a-col :md="12" :xs="24" style="padding: 0 15px">
              <a-form-model-item :label="$t('icon')" prop="icon">
                <a-input
                  :placeholder="$t('icon')"
                  v-model="route.icon"
                />
              </a-form-model-item>
            </a-col>
          </a-row>
        </a-form-model>
        <a-divider> Details for store js </a-divider>
        <a-form-model
          @submit="onSubmit"
          ref="storeForm"
          :model="store"
          :rules="rulesStore"
          :label-col="labelCol"
          :wrapper-col="wrapperCol"
        >
          <a-row>
            <a-col :md="12" :xs="24" style="padding: 0 15px">
              <a-form-model-item :label="$t('customUrl')" prop="customUrl">
                <a-input
                  :placeholder="$t('customUrl')"
                  v-model="store.customUrl"
                />
              </a-form-model-item>
            </a-col>
            <a-col :md="12" :xs="24" style="padding: 0 15px">
              <a-form-model-item :label="$t('response_from_request')" prop="response_from_request">
                <a-input
                  :placeholder="$t('response_from_request')"
                  v-model="route.response_from_request"
                />
              </a-form-model-item>
            </a-col>
          </a-row>
        </a-form-model>
        <a-divider> Details for create js </a-divider>
        <a-form-model
          @submit="onSubmit"
          ref="storeForm"
          :model="create"
          :rules="rulesCreate"
          :label-col="labelCol"
          :wrapper-col="wrapperCol"
        >
          <a-row>
            <a-col span="24">
              <a-row>
                <div
                  v-for="(k, index) in create.inputs"
                  :key="index">
                  <a-card style="margin-bottom: 8px">
                    <a-col :xs="24" :md="5" style="padding: 0 15px">
                      <a-form-model-item :label="$t('variable')" prop="variable">
                        <a-input
                          :placeholder="$t('variable')"
                          v-model="create.inputs[index].variable" />
                      </a-form-model-item>
                    </a-col>
                    <a-col :xs="24" :md="5" style="padding: 0 15px">
                      <a-form-model-item :label="$t('type')" prop="type">
                        <a-select
                          :placeholder="$t('type')"
                          v-model="create.inputs[index].type">
                          <a-select-option key="select" value="select">
                            Select
                          </a-select-option>
                          <a-select-option key="input" value="input">
                            Input
                          </a-select-option>
                          <a-select-option key="textarea" value="textarea">
                            Textarea
                          </a-select-option>
                          <a-select-option key="checkbox" value="checkbox">
                            Checkbox
                          </a-select-option>
                          <a-select-option key="switch" value="switch">
                            Switch
                          </a-select-option>
                        </a-select>
                      </a-form-model-item>
                    </a-col>
                    <a-col :xs="24" :md="5" style="padding: 0 15px">
                      <a-form-model-item :label="$t('column')" prop="column">
                        <a-input
                          type="number"
                          :placeholder="$t('column')"
                          v-model="create.inputs[index].column" />
                      </a-form-model-item>
                    </a-col>
                    <a-col :xs="24" :md="5" style="padding: 0 15px">
                      <a-form-model-item :label="$t('regEx')" prop="regEx">
                        <a-input
                          :placeholder="$t('regEx')"
                          v-model="create.inputs[index].regEx" />
                      </a-form-model-item>
                    </a-col>
                    <a-col :xs="24" :md="2" style="padding: 0 15px">
                      <a-form-model-item :label="$t('isInListColumn')" prop="isInListColumn">
                        <a-switch
                          :checked-children="$t('InList')"
                          :un-checked-children="$t('notInList')"
                          default-checked
                          v-model="create.inputs[index].isInListColumn"
                        />
                      </a-form-model-item>
                    </a-col>
                    <a-col :xs="2" style="padding: 0 15px">
                      <a-icon
                        v-if="create.inputs.length > 1"
                        class="dynamic-delete-button"
                        type="minus-circle-o"
                        @click="() => remove(k, index)"
                      />
                    </a-col>
                  </a-card>
                </div>
                <a-col :xs="24">
                  <a-form-item>
                    <a-button type="dashed" style="margin: 15px auto auto 15px; width: 100%" @click="add">
                      <a-icon type="plus" /> {{ $t('add') }}
                    </a-button>
                  </a-form-item>
                </a-col>
              </a-row>
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

export default {
  data () {
    return {
      productId: this.$route.params.id,
      labelCol: { span: 24 },
      wrapperCol: { span: 24 },
      imageUrlLogo: '',
      routeJs: null,
      loadingLogo: false,
      other: '',
      categoryData: [],
      loading: false,
      create: {
        inputs: [{
          variable: null,
          type: null,
          column: null,
          isInListColumn: null,
          regEx: null
        }]
      },
      store: {},
      route: {
        name: null,
        icon: null
      },
      rulesStore: {},
      rulesCreate: {},
      rulesRoute: {
        name: [
          { required: true, message: this.$t('required'), trigger: 'change' }
        ]
      }
    }
  },
  mounted () {
  },
  methods: {
    remove (k, index) {
      this.create.inputs.splice(index, 1)
    },

    add () {
      this.create.inputs.push({
        duration: null,
        price: null
      })
    },
    onSubmit (e) {
      e.preventDefault()
      // download js used in route

      const routeFunction = require('./downloads/routeGenerate')
      const routejs = routeFunction.routeGenerate({ icon: this.route.icon, name: this.route.name })
      var blob = new Blob([routejs], { type: 'js' })
      var a = document.createElement('a')
      a.download = `${this.route.name}Route.js`
      a.href = URL.createObjectURL(blob)
      a.dataset.downloadurl = ['js', a.download, a.href].join(':')
      a.style.display = 'none'
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      setTimeout(function () { URL.revokeObjectURL(a.href) }, 1500)

      // download js used in route

      const storeFunction = require('./downloads/storeGenerate')
      const storejs = storeFunction.storeGenerate({ customUrl: this.store.customUrl, response_from_request: this.store.response_from_request, name: this.route.name })
      var blobstore = new Blob([storejs], { type: 'js' })
      var aStore = document.createElement('a')
      aStore.download = `${this.route.name}Store.js`
      aStore.href = URL.createObjectURL(blobstore)
      aStore.dataset.downloadurl = ['js', aStore.download, aStore.href].join(':')
      aStore.style.display = 'none'
      document.body.appendChild(aStore)
      aStore.click()
      document.body.removeChild(aStore)
      setTimeout(function () { URL.revokeObjectURL(aStore.href) }, 1500)

      // download js used in create

      const createFunction = require('./downloads/createGenerate')
      const createjs = createFunction.createGenerate({ name: this.route.name, inputs: this.create.inputs })
      var blobcreate = new Blob([createjs], { type: 'vue' })
      var aCreate = document.createElement('a')
      aCreate.download = `${this.route.name}Create.vue`
      aCreate.href = URL.createObjectURL(blobcreate)
      aCreate.dataset.downloadurl = ['vue', aCreate.download, aCreate.href].join(':')
      aCreate.style.display = 'none'
      document.body.appendChild(aCreate)
      aCreate.click()
      document.body.removeChild(aCreate)
      setTimeout(function () { URL.revokeObjectURL(aCreate.href) }, 1500)

      // download js used in list

      const listFunction = require('./downloads/listGenerate')
      const listjs = listFunction.listGenerate({ name: this.route.name, inputs: this.create.inputs })
      var bloblist = new Blob([listjs], { type: 'vue' })
      var aList = document.createElement('a')
      aList.download = `${this.route.name}List.vue`
      aList.href = URL.createObjectURL(bloblist)
      aList.dataset.downloadurl = ['vue', aList.download, aList.href].join(':')
      aList.style.display = 'none'
      document.body.appendChild(aList)
      aList.click()
      document.body.removeChild(aList)
      setTimeout(function () { URL.revokeObjectURL(aList.href) }, 1500)
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
