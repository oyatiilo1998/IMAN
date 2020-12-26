
export function checkboxGenerate (object) {
    const checkbox = `
    <a-col :md="${object.column}" :xs="24" style="padding: 0 15px">
      <a-form-model-item :label="$t('${object.variable}')" prop="${object.variable}">
        <a-checkbox
          :placeholder="$t('${object.variable}')"
        />
      </a-form-model-item>
    </a-col>`

    return checkbox
}
