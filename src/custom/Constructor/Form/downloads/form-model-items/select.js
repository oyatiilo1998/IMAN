
export function selectGenerate (object) {
    const select = `
    <a-col :md="${object.column}" :xs="24" style="padding: 0 15px">
      <a-form-model-item :label="$t('${object.variable}')" prop="${object.variable}">
        <a-select
          :placeholder="$t('${object.variable}')"
          v-model="form.${object.variable}"
        >
          <a-select-option key="unknown"> unknown </a-select-option>
        </a-select>
      </a-form-model-item>
    </a-col>`

    return select
}
