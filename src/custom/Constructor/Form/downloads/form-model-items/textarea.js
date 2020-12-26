
export function textareaGenerate (object) {
    const textarea = `
    <a-col :md="${object.column}" :xs="24" style="padding: 0 15px">
      <a-form-model-item :label="$t('${object.variable}')" prop="${object.variable}">
        <a-textarea
          :placeholder="$t('${object.variable}')"
          v-model="form.${object.variable}"
        />
      </a-form-model-item>
    </a-col>`

    return textarea
}
