
export function switchGenerate (object) {
    const switchInput = `
    <a-col :md="${object.column}" :xs="24" style="padding: 0 15px">
      <a-form-model-item :label="$t('${object.variable}')" prop="${object.variable}">
        <a-switch
          :checked-children="$t('${object.variable}')"
          :un-checked-children="$t('not${object.variable}')" default-checked
          :placeholder="$t('${object.variable}')"
          v-model="form.${object.variable}"
        />
      </a-form-model-item>
    </a-col>`

    return switchInput
}
