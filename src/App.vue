<template>
  <div id="datatables-admin">
    <h1>Insert Data</h1>
    <div class="search">
      <input id='input' type="text" size=100 placeholder="insert format in json"/>
      <!-- <button class="submit-button" @click="changeInput()">Submit</button> -->
    </div>
    <div class="">
      <table id="editor">
        <thead>
          <tr>
            <th v-for="(column, index_col) in columns" :key="column.id">
              <i class="fas fa-plus fa-2x dta-btn add-col" title="Add a column after this one" v-on:click="add_col(index_col + 1)"></i>
              <i class="fas fa-times fa-2x dta-btn delete-col" title="Delete this column" v-on:click="delete_col(index_col)"></i>
              <br />
              <editable :content="columns[index_col].text" v-on:update="update_col($event, index_col)"></editable>
            </th>
            <th>
              <i class="fas fa-times fa-2x dta-btn delete-all-rows" title="Delete all rows" v-on:click="delete_all_rows"></i>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index_row) in rows" :key="index_row">
            <td v-for="(column, index_col) in columns" :key="column.id">
              <editable :content="rows[index_row][index_col].text" v-on:update="update_row($event, index_row, index_col)"></editable>
            <td>
              <i class="fas fa-plus fa-2x dta-btn add-row" title="Add a row under this one" v-on:click="add_row(index_row + 1)"></i>
              <i class="fas fa-times fa-2x dta-btn delete-row" title="Delete this row" v-on:click="delete_row(index_row)"></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="IS_DEBUG_MODE">
      <p>
        <b>Columns:</b>
        <span v-text="columns"></span>
      </p>
      <p>
        <b>Rows:</b>
        <span v-text="rows"></span>
      </p>
    </div>
    <table-preview id="preview"></table-preview>
  </div>
</template>

<script>
import Editable from './Editable'
import TablePreview from './Table-Preview'
export default {
  name: 'app',
  components:{
    Editable, TablePreview
  },
  data() {
    return {
      generate_table:false,
      LOREM: "Click me to edit",
      NONE: "",
      IS_DEBUG_MODE: false,  // Show or hide data
      filters: [
        {
          'id': 'filter01',
          'text': ''
        },
        {
          'id': 'filter02',
          'text': ''
        },
        {
          'id': 'filter02',
          'text': ''
        }
      ],
      columns: [
        {
          'id': '001',
          'text': 'Insert'
        },
        {
          'id': '002',
          'text': 'Insert'
        },
        {
          'id': '003',
          'text': 'Insert'
        },
        {
          'id': '004',
          'text': 'Insert'
        }
      ],
      rows: [
        [
          {
            'id': '005',
            'text': ''
          },
          {
            'id': '006',
            'text': ''
          },
          {
            'id': '007',
            'text': ''
          },
          {
            'id': '008',
            'text': ''
          }
        ],

        [
          {
            'id': '009',
            'text': ''
          },
          {
            'id': '010',
            'text': ''
          },
          {
            'id': '011',
            'text': ''
          },
          {
            'id': '012',
            'text': ''
          }
        ],

        [
          {
            'id': '013',
            'text': ''
          },
          {
            'id': '014',
            'text': ''
          },
          {
            'id': '015',
            'text': ''
          },
          {
            'id': '016',
            'text': ''
          }
        ]
      ]
    }
  },
  methods: {
    generate_random(min, max) {
        return Math.random() * (max - min) + min;
    },

    generate_id: function() {
      return '__key_prefix__' + Date.now() + '_' + this.generate_random(10000, 99999);
    },

    new_data: function(text) {
      return {
        'id': this.generate_id(),
        'text': text
      }
    },

    refresh: function() {
      for(var i = 0; i < this.columns.length; i++) {
        this.columns[i].id = this.generate_id();
      }

      for(var i = 0; i < this.rows.length; i++) {
        for(var j = 0; j < this.columns.length; j++) {
          this.rows[i][j].id = this.generate_id();
        }
      }

      this.$forceUpdate();
    },

    update_col: function(content, col_index) {
      this.columns[col_index].text = content.trim();
      this.refresh();
    },

    update_row: function(content, row_index, col_index) {
      this.rows[row_index][col_index].text = content.trim();
      this.refresh();
    },

    add_col: function(col_index) {
      // Add a new column at given index
      this.columns.splice(col_index, 0, this.new_data(this.LOREM));
      for(var i = 0; i < this.rows.length; i++) {
        var row = this.rows[i];
        row.splice(col_index, 0, this.new_data(this.NONE));
      }
      this.refresh();
    },

    delete_col: function(col_index, skip_confirm = false) {
      if(!skip_confirm) {
        var result = confirm("Are you sure you want to delete this column?");
        if(!result) {
          return;
        }
      }

      // Remove column
      this.columns.splice(col_index, 1);

      // Remove related items in rows
      for(var i = 0; i < this.rows.length; i++) {
        var row = this.rows[i];
        row.splice(col_index, 1);
      }

      this.refresh();
    },

    add_row: function(row_index) {
      // Add a new row at given index
      this.rows.splice(row_index, 0, new Array(this.columns.length));

      for(var i = 0; i < this.columns.length; i++) {
        this.rows[row_index][i] = this.new_data(this.NONE);
      }

      this.refresh();
    },

    delete_row: function(row_index, skip_confirm = false) {
      if(!skip_confirm) {
        var result = confirm("Are you sure you want to delete this row?");
        if(!result) {
          return;
        }
      }

      this.rows.splice(row_index, 1);

      this.refresh();
    },

    delete_all_rows: function() {
      var result = confirm("Are you sure you want to delete all rows?");
      if(!result) {
        return;
      }

      var nr_rows = this.rows.length;
      for(var i = 0; i < nr_rows; i++) {
        this.delete_row(0, true);
      }
      this.refresh();
    }
  }
}
</script>

<style>@import url("styles.css");</style>
