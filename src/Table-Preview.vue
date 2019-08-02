<template>
  <div class="table-preview-container">
    <button class='render-table' v-on:click="render_table">Preview Table</button>
    <table class="table-render-preview"></table>
  </div>
</template>
<script>
export default{
  name:"table-preview",
  data(){
    return{
      userInput:'',
      styleObject:{
        bgColor:'',
        color:'',
        headerColor:'',
        cellColor:'',
        cellBg:''
      }
    }
  },
  props:{
    content: Array
  },
  methods:{
    parseInput:function(){
      this.userInput = document.getElementById('input').value;
      try{
        this.userInput = JSON.parse(this.userInput);
      }
      catch(e){
        alert('use default table');
      }
      this.updateStyleObject();
    },
    updateStyleObject(){
      this.styleObject.bgColor = this.userInput.bgColor || '#6495ED';
      this.styleObject.color = this.userInput.color || 'white';
      this.styleObject.headerColor = this.userInput.headerColor || 'black';
      this.styleObject.cellColor = this.userInput.cellColor ||'black';
    },
    render_table() {
      this.parseInput();
      var columns = this.$parent.columns;
      var rows = this.$parent.rows;
      var filters = this.$parent.filters;
      var table_placeholder = document.querySelector('.table-render-preview');

      function make_filters_html(filters) {
        var filters_html = "<div class='filters-container'><p><b>Search filters:</b></p><ul class='filters-list'>";
        for(var i = 0; i < filters.length; i++) {
          filters_html += "<li class='search-filter'>" + filters[i].text + "</li>";
        }
        filters_html += "</ul></div>"

        return filters_html;
      }

      function make_table_html(columns, rows) {
        var result = `<table border=1><thead id='header'><tr>`;
        for(var i = 0; i < columns.length; i++) {
          result += "<th>" + columns[i].text + "</th>";
        }
        result += `</thead><tbody id="cell">`
        for(var i = 0; i < rows.length; i++) {
          result += `<tr id='cell'>`;
          for(var j = 0; j < rows[i].length; j++) {
            if(columns[j].text == "URL" || columns[j].text.trim() == "URL") {
              result += `<td>` +  render_link(rows[i][j].text) + "</td>";
            } else {
              result += "<td>" + rows[i][j].text + "</td>";
            }
          }
          result += "</tr>";
        }
        result += "</tbody></table>";

        return result;
      }

      if ($.fn.DataTable.isDataTable(".table-render-preview")) {
        $('.table-render-preview').DataTable().clear().destroy();
      }

      var new_el = document.createElement("table");
      new_el.className = "table-render-preview";
      new_el.innerHTML = make_table_html(columns, rows);
      new_el.id = 'table';
      table_placeholder.parentNode.replaceChild(new_el, table_placeholder);
      var the_table = $('.table-render-preview').dataTable({
        "destroy": true,
        aaSorting: []
      });
      $(".dataTables_wrapper").append(make_filters_html(filters));
      $(".search-filter").on("click", function() {
        the_table.fnFilter('"' + $(this).text() + '"');
        $(".search-filter").removeClass("is-selected");
        $(this).addClass("is-selected");
      });
      
      new_el.setAttribute('bgColor',this.styleObject.bgColor);
      document.getElementById("header").style.color =  this.styleObject.headerColor;
      document.getElementById('cell').style.color = this.styleObject.cellColor;

    }
  }
}
</script>
