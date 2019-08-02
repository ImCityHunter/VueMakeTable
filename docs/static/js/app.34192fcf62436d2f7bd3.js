webpackJsonp(
  [1],
  {
    NHnr: function(t, e, s) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var o = s("7+uW"),
        i = {
          name: "app",
          data: function() {
            return {
              LOREM: "Click me to edit",
              NONE: "",
              IS_DEBUG_MODE: !1,
              filters: [
                { id: "filter01", text: "Demo category" },
                { id: "filter02", text: "Demo category 2" },
                { id: "filter02", text: "Sub-category 3" }
              ],
              columns: [
                { id: "001", text: "Click me to edit" },
                { id: "002", text: "Demo column 2" },
                { id: "003", text: "Demo column 3" },
                { id: "004", text: "URL" }
              ],
              rows: [
                [
                  { id: "005", text: "Demo category" },
                  { id: "006", text: "Sub-category 1" },
                  { id: "007", text: "col3 data1" },
                  { id: "008", text: "https://www.google.com" }
                ],
                [
                  { id: "009", text: "Demo category" },
                  { id: "010", text: "Sub-category 2" },
                  { id: "011", text: "col3 data2" },
                  { id: "012", text: "https://www.yahoo.com" }
                ],
                [
                  { id: "013", text: "Demo category 2" },
                  { id: "014", text: "Sub-category 3" },
                  { id: "015", text: "col3 data3" },
                  { id: "016", text: "https://www.yahoo.com" }
                ]
              ]
            };
          },
          methods: {
            generate_random: function(t, e) {
              return Math.random() * (e - t) + t;
            },
            generate_id: function() {
              return (
                "__key_prefix__" +
                Date.now() +
                "_" +
                this.generate_random(1e4, 99999)
              );
            },
            new_data: function(t) {
              return { id: this.generate_id(), text: t };
            },
            refresh: function() {
              for (var t = 0; t < this.columns.length; t++)
                this.columns[t].id = this.generate_id();
              for (t = 0; t < this.rows.length; t++)
                for (var e = 0; e < this.columns.length; e++)
                  this.rows[t][e].id = this.generate_id();
              this.$forceUpdate();
            },
            update_col: function(t, e) {
              (this.columns[e].text = t.trim()), this.refresh();
            },
            update_row: function(t, e, s) {
              (this.rows[e][s].text = t.trim()), this.refresh();
            },
            add_col: function(t) {
              this.columns.splice(t, 0, this.new_data(this.LOREM));
              for (var e = 0; e < this.rows.length; e++) {
                this.rows[e].splice(t, 0, this.new_data(this.NONE));
              }
              this.refresh();
            },
            delete_col: function(t) {
              if (
                !(
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1]
                ) &&
                !confirm("Are you sure you want to delete this column?")
              )
                return;
              this.columns.splice(t, 1);
              for (var e = 0; e < this.rows.length; e++) {
                this.rows[e].splice(t, 1);
              }
              this.refresh();
            },
            add_row: function(t) {
              this.rows.splice(t, 0, new Array(this.columns.length));
              for (var e = 0; e < this.columns.length; e++)
                this.rows[t][e] = this.new_data(this.NONE);
              this.refresh();
            },
            delete_row: function(t) {
              if (
                !(
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1]
                ) &&
                !confirm("Are you sure you want to delete this row?")
              )
                return;
              this.rows.splice(t, 1), this.refresh();
            },
            delete_all_rows: function() {
              if (confirm("Are you sure you want to delete all rows?")) {
                for (var t = this.rows.length, e = 0; e < t; e++)
                  this.delete_row(0, !0);
                this.refresh();
              }
            },
            delete_all_cols: function() {
              if (confirm("Are you sure you want to delete all columns?")) {
                for (var t = this.columns.length, e = 0; e < t; e++)
                  this.delete_col(0, !0);
                this.refresh();
              }
            },
            move_col_to_left: function(t) {
              if (0 != t) {
                var e = this.columns[t - 1].text;
                (this.columns[t - 1].text = this.columns[t].text),
                  (this.columns[t].text = e);
                for (var s = 0; s < this.rows.length; s++)
                  (e = this.rows[s][t - 1].text),
                    (this.rows[s][t - 1].text = this.rows[s][t].text),
                    (this.rows[s][t].text = e);
                (this.columns = this.columns.slice()),
                  (this.rows = this.rows.slice()),
                  this.refresh();
              }
            },
            move_col_to_right: function(t) {
              if (t != this.columns.length - 1) {
                var e = this.columns[t + 1].text;
                (this.columns[t + 1].text = this.columns[t].text),
                  (this.columns[t].text = e);
                for (var s = 0; s < this.rows.length; s++)
                  (e = this.rows[s][t + 1].text),
                    (this.rows[s][t + 1].text = this.rows[s][t].text),
                    (this.rows[s][t].text = e);
                (this.columns = this.columns.slice()),
                  (this.rows = this.rows.slice()),
                  this.refresh();
              }
            },
            move_row_up: function(t) {
              if (0 != t) {
                var e = this.rows[t - 1];
                (this.rows[t - 1] = this.rows[t]),
                  (this.rows[t] = e),
                  (this.columns = this.columns.slice()),
                  (this.rows = this.rows.slice()),
                  this.refresh();
              }
            },
            move_row_down: function(t) {
              if (t != this.rows.length - 1) {
                var e = this.rows[t + 1];
                (this.rows[t + 1] = this.rows[t]),
                  (this.rows[t] = e),
                  (this.columns = this.columns.slice()),
                  (this.rows = this.rows.slice()),
                  this.refresh();
              }
            }
          }
        },
        r = {
          render: function() {
            var t = this,
              e = t.$createElement,
              s = t._self._c || e;
            return s(
              "div",
              { attrs: { id: "datatables-admin" } },
              [
                s("h1", [t._v("Datatables admin")]),
                t._v(" "),
                s("table", { attrs: { id: "editor" } }, [
                  s("thead", [
                    s(
                      "tr",
                      [
                        t._l(t.columns, function(e, o) {
                          return s(
                            "th",
                            { key: e.id },
                            [
                              s("i", {
                                staticClass:
                                  "fas fa-long-arrow-alt-left fa-2x dta-btn move-col-left",
                                attrs: { title: "Move column to left" },
                                on: {
                                  click: function(e) {
                                    t.move_col_to_left(o);
                                  }
                                }
                              }),
                              t._v(" "),
                              s("i", {
                                staticClass:
                                  "fas fa-long-arrow-alt-right fa-2x dta-btn move-col-right",
                                attrs: { title: "Move column to right" },
                                on: {
                                  click: function(e) {
                                    t.move_col_to_right(o);
                                  }
                                }
                              }),
                              t._v(" "),
                              s("i", {
                                staticClass:
                                  "fas fa-plus fa-2x dta-btn add-col",
                                attrs: { title: "Add a column after this one" },
                                on: {
                                  click: function(e) {
                                    t.add_col(o + 1);
                                  }
                                }
                              }),
                              t._v(" "),
                              s("i", {
                                staticClass:
                                  "fas fa-times fa-2x dta-btn delete-col",
                                attrs: { title: "Delete this column" },
                                on: {
                                  click: function(e) {
                                    t.delete_col(o);
                                  }
                                }
                              }),
                              t._v(" "),
                              s("br"),
                              t._v(" "),
                              s("editable", {
                                attrs: { content: t.columns[o].text },
                                on: {
                                  update: function(e) {
                                    t.update_col(e, o);
                                  }
                                }
                              })
                            ],
                            1
                          );
                        }),
                        t._v(" "),
                        s("th", [
                          s("i", {
                            staticClass: "fas fa-plus fa-2x dta-btn add-col",
                            attrs: { title: "Add a column" },
                            on: {
                              click: function(e) {
                                t.add_col(0);
                              }
                            }
                          }),
                          t._v(" "),
                          s("i", {
                            staticClass: "fas fa-plus fa-2x dta-btn add-row",
                            attrs: { title: "Add a row" },
                            on: {
                              click: function(e) {
                                t.add_row(0);
                              }
                            }
                          }),
                          t._v(" "),
                          s("i", {
                            staticClass:
                              "fas fa-times fa-2x dta-btn delete-all-cols",
                            attrs: { title: "Delete all columns" },
                            on: { click: t.delete_all_cols }
                          }),
                          t._v(" "),
                          s("i", {
                            staticClass:
                              "fas fa-times fa-2x dta-btn delete-all-rows",
                            attrs: { title: "Delete all rows" },
                            on: { click: t.delete_all_rows }
                          })
                        ])
                      ],
                      2
                    )
                  ]),
                  t._v(" "),
                  s(
                    "tbody",
                    t._l(t.rows, function(e, o) {
                      return s(
                        "tr",
                        { key: o },
                        [
                          t._l(t.columns, function(e, i) {
                            return s(
                              "td",
                              { key: e.id },
                              [
                                s("editable", {
                                  attrs: { content: t.rows[o][i].text },
                                  on: {
                                    update: function(e) {
                                      t.update_row(e, o, i);
                                    }
                                  }
                                })
                              ],
                              1
                            );
                          }),
                          s("td", [
                            s("i", {
                              staticClass:
                                "fas fa-long-arrow-alt-up fa-2x dta-btn move-row-up",
                              attrs: { title: "Move row up" },
                              on: {
                                click: function(e) {
                                  t.move_row_up(o);
                                }
                              }
                            }),
                            t._v(" "),
                            s("i", {
                              staticClass:
                                "fas fa-long-arrow-alt-down fa-2x dta-btn move-row-down",
                              attrs: { title: "Move row down" },
                              on: {
                                click: function(e) {
                                  t.move_row_down(o);
                                }
                              }
                            }),
                            t._v(" "),
                            s("i", {
                              staticClass: "fas fa-plus fa-2x dta-btn add-row",
                              attrs: { title: "Add a row under this one" },
                              on: {
                                click: function(e) {
                                  t.add_row(o + 1);
                                }
                              }
                            }),
                            t._v(" "),
                            s("i", {
                              staticClass:
                                "fas fa-times fa-2x dta-btn delete-row",
                              attrs: { title: "Delete this row" },
                              on: {
                                click: function(e) {
                                  t.delete_row(o);
                                }
                              }
                            })
                          ])
                        ],
                        2
                      );
                    })
                  )
                ]),
                t._v(" "),
                t.IS_DEBUG_MODE
                  ? s("div", [
                      s("p", [
                        s("b", [t._v("Columns:")]),
                        t._v(" "),
                        s("span", {
                          domProps: { textContent: t._s(t.columns) }
                        })
                      ]),
                      t._v(" "),
                      s("p", [
                        s("b", [t._v("Rows:")]),
                        t._v(" "),
                        s("span", { domProps: { textContent: t._s(t.rows) } })
                      ])
                    ])
                  : t._e(),
                t._v(" "),
                s("table-preview")
              ],
              1
            );
          },
          staticRenderFns: []
        };
      var n = s("VU/8")(
        i,
        r,
        !1,
        function(t) {
          s("X9fO");
        },
        null,
        null
      ).exports;
      (o.a.config.productionTip = !1),
        o.a.component("editable", {
          template:
            '\n    <div contenteditable="true" @blur="emitChange">\n      {{ content }}\n    </div>\n  ',
          props: ["content"],
          methods: {
            emitChange: function(t) {
              this.$emit("update", t.target.textContent);
            }
          }
        }),
        o.a.component("table-preview", {
          template:
            '\n    <div class="table-preview-container">\n      <button class=\'render-table\' v-on:click="render_table">Preview table</button>\n      <table class="table-render-preview"></table>\n    </div>\n  ',
          props: ["content"],
          methods: {
            render_table: function() {
              var t = this.$parent.columns,
                e = this.$parent.rows,
                s = this.$parent.filters,
                o = document.querySelector(".table-render-preview");
              $.fn.DataTable.isDataTable(".table-render-preview") &&
                $(".table-render-preview")
                  .DataTable()
                  .clear()
                  .destroy();
              var i = document.createElement("table");
              (i.className = "table-render-preview"),
                (i.innerHTML = (function(t, e) {
                  for (
                    var s, o = "<table border=1><thead><tr>", i = 0;
                    i < t.length;
                    i++
                  )
                    o += "<th>" + t[i].text + "</th>";
                  for (o += "</thead><tbody>", i = 0; i < e.length; i++) {
                    o += "<tr>";
                    for (var r = 0; r < e[i].length; r++)
                      "URL" == t[r].text || "URL" == t[r].text.trim()
                        ? (o +=
                            "<td>" +
                            (void 0 !== (s = e[i][r].text)
                              ? "<a href='" +
                                s +
                                "' target='_blank' title=" +
                                s +
                                ">Link<span style='display:none !important'>" +
                                s +
                                "</span></a>"
                              : "N/A") +
                            "</td>")
                        : (o += "<td>" + e[i][r].text + "</td>");
                    o += "</tr>";
                  }
                  return (o += "</tbody></table>");
                })(t, e)),
                o.parentNode.replaceChild(i, o);
              var r = $(".table-render-preview").dataTable({
                destroy: !0,
                aaSorting: []
              });
              $(".dataTables_wrapper").append(
                (function(t) {
                  for (
                    var e =
                        "<div class='filters-container'><p><b>
                         filters:</b></p><ul class='filters-list'>",
                      s = 0;
                    s < t.length;
                    s++
                  )
                    e += "<li class='search-filter'>" + t[s].text + "</li>";
                  return (e += "</ul></div>");
                })(s)
              ),
                $(".search-filter").on("click", function() {
                  r.fnFilter('"' + $(this).text() + '"'),
                    $(".search-filter").removeClass("is-selected"),
                    $(this).addClass("is-selected");
                });
            }
          }
        }),
        new o.a({
          el: "#datatables-admin",
          template: "<App/>",
          components: { App: n }
        });
    },
    X9fO: function(t, e) {}
  },
  ["NHnr"]
);
//# sourceMappingURL=app.34192fcf62436d2f7bd3.js.map
