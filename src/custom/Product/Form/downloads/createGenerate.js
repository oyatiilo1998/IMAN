export function createGenerate (object) {
    const select = require('./form-model-items/select')
    const input = require('./form-model-items/input')
    const textarea = require('./form-model-items/textarea')
    const switchInput = require('./form-model-items/switch')
    const checkbox = require('./form-model-items/checkbox')
    const capital = (object.name.charAt(0).toUpperCase() + object.name.slice(1).toLowerCase())
    const createjs = (`<template>
    <div>
      <a-row>
        <a-col :md="12" :xs="24">
          <a-breadcrumb style="margin: 10px 5px">
            <a-breadcrumb-item>
              <router-link to="/${object.name}/">{{ $t('${object.name}') }}</router-link>
            </a-breadcrumb-item>
            <a-breadcrumb-item>{{ $t('add') }}</a-breadcrumb-item>
          </a-breadcrumb>
        </a-col>
      </a-row>
  
      <a-card :title="$t('Forma')">
        <template>
          <a-form-model
            @submit="onSubmit"
            ref="${object.name}Form"
            :model="form"
            :rules="rules"
            :label-col="labelCol"
            :wrapper-col="wrapperCol"
          >
            <a-row>${object.inputs.map(obj => {
								if (obj.type === 'select') return select.selectGenerate({ variable: obj.variable, column: obj.column })
								else if (obj.type === 'input') return input.inputGenerate({ variable: obj.variable, column: obj.column })
								else if (obj.type === 'textarea') return textarea.textareaGenerate({ variable: obj.variable, column: obj.column })
								else if (obj.type === 'switch') return switchInput.switchGenerate({ variable: obj.variable, column: obj.column })
								else if (obj.type === 'checkbox') return checkbox.checkboxGenerate({ variable: obj.variable, column: obj.column })
							})}
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
  
  export default {
    data () {
      return {
        categoryId: this.$route.params.id,
        isNewForm: true,
        labelCol: { span: 24 },
        wrapperCol: { span: 24 },
        other: '',
        loading: false,
        form: {
          name: '',
          parent_id: null
        },
        rules: {
					${object.inputs.map(obj => {
						if (obj.regEx) {
							return (
						`${obj.variable}: [
							{ pattern: '${obj.regEx}', message: this.$t('invalid'), trigger: 'change' }
						],`)
						}
					})}					
        }
      }
    },
    methods: {
			checkPost () {
				let flag = null
				this.$refs.${object.name}Form.validate((valid) => {
					if (valid) {
						flag = true
						return true
					} else {
						flag = false
						return false
					}
				})
				return flag
			},
     	get${capital} (id) {
        this.$store.dispatch('get${capital}', id).then((res) => {
          this.form = res.${object.name}
        })
			},
			update${capital} () {
				if (this.checkPost() === false) return -1
				this.$store.dispatch('update${capital}', this.form).then((res) => {
					this.$alertMessage('success', '${capital}', '${capital} has updated successfully', this)
					this.$router.go(-1)
				})
			},
      onSubmit (e) {
        e.preventDefault()
				if (this.checkPost() === false) return -1
				this.$store.dispatch('postCategory', this.form).then((res) => {
					this.$alertMessage('success', '${capital}', '${capital} added successfully', this)
					this.$router.go(-1)
				})
      },
      resetForm () {
        this.$refs.ruleForm.resetFields()
      }
    },
    created () {
      if (this.$isEmptyObj(this.$route.params)) {
        this.isNewForm = true
      } else this.get${capital}(this.$route.params.id)
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
  `)
return createjs
}
