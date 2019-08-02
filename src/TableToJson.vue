

<template>
  <button class='render-table' @click="generate_json"> Produce Json </button>
</template>
<script>

export default {
   methods: {
        generate_json: function() {
          const rows = this.$parent.rows;
          const columns = this.$parent.columns;
          const numOfColumns = columns.length;
          const numOfItems = rows.length;
          var plugin = new Array();
          for(let i=0;i<numOfItems;i++){
            var item = {};
            for(let j=0;j<numOfColumns;j++){
              let row = rows[i];
              let readText = row[j].text;
              let head = columns[j].text;
              item[ head ]=readText;
            }
            plugin.push(item);
          }
          var jsonArray = JSON.parse(JSON.stringify(plugin));
          alert(JSON.stringify(plugin));
        }
    }
}

</script>
