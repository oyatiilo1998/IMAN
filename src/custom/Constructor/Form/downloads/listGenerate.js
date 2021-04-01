export function listGenerate (object) {
  const capital = (object.name.charAt(0).toUpperCase() + object.name.slice(1).toLowerCase())
  const listjs = `<template>
  <page-header-wrapper :title="false">
    <a-card>
      <a-row type="flex" justify="end" class="mb-2">
        <a-col span="auto">
          <a-button type="primary" @click="$router.push('/${object.name}/list/new')">{{ $t('button.create') }}</a-button>
        </a-col>
      </a-row>
      <a-table
        :columns="columns"
        :data-source="data"
        :row-key="record => record.id"
      >
        <span slot="actions" slot-scope="text">
          <a-popconfirm
            title="Вы хотите это удалить?"
            ok-text="Да"
            cancel-text="Нет"
            @confirm="delete${capital}(text)"
            @cancel="cancel => null"
          >
            <a-tooltip placement="bottomLeft" :title="$t('button.delete')">
              <a-button type="danger" icon="delete" />
            </a-tooltip>
          </a-popconfirm>
          <a-tooltip placement="bottomLeft" :title="$t('button.edit')">
            <a-button class="mx-1" @click="$router.push('/${object.name}/list/edit/' + text.id)" type="primary" icon="edit" />
          </a-tooltip>
        </span>
      </a-table>
    </a-card>
  </page-header-wrapper>
</template>

<script>
export default {
 data () {
     return {
         columns: [ ${object.inputs.map(column => {
          if (column.isInListColumn) {
            return `{
            title: '${column.variable}',
            dataIndex: '${column.variable}',
            key: '${column.variable}'
          }`
          } else return null
         })},
        {
            title: 'Actions',
            key: 'actions'
      }
         ],
         ${object.name}: []
     }
 },
 methods: {
     get${capital} () {
         this.$store.dispatch('get${capital}').then(res => {
             this.${object.name} = res
         })
     },
     delete${capital} (e) {
        this.$store.dispatch('delete${capital}', e.id).then(res => {
            this.$deleteFromList(this.${object.name}, e.id)
            this.$alertMessage('success', 'Deleted', 'Category deleted successfully', this)
          })
     }
 },
 created () {
     this.get${capital}()
 }
}
</script>

<style>

</style>
`
return listjs
}
