/******/
(function () { // webpackBootstrap
    /******/
    "use strict";
    /******/
    var __webpack_modules__ = ({

        /***/ 2445:
        /***/ (function (__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {


// EXTERNAL MODULE: ./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js
            var runtime_dom_esm_bundler = __webpack_require__(5130);
// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
            var runtime_core_esm_bundler = __webpack_require__(6768);
            ;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=template&id=8c34f432

            const _hoisted_1 = {
                id: "app"
            };
            const _hoisted_2 = {
                class: "main-content"
            };
            const _hoisted_3 = {
                key: 0,
                class: "main-dashboard"
            };
            const _hoisted_4 = {
                class: "feature-cards"
            };
            const _hoisted_5 = {
                key: 1,
                class: "page-container"
            };
            const _hoisted_6 = {
                class: "page-header"
            };
            const _hoisted_7 = {
                key: 2,
                class: "page-container"
            };
            const _hoisted_8 = {
                class: "page-header"
            };

            function render(_ctx, _cache, $props, $setup, $data, $options) {
                const _component_Dashboard = (0, runtime_core_esm_bundler/* resolveComponent */.g2)("Dashboard");
                const _component_AIChat = (0, runtime_core_esm_bundler/* resolveComponent */.g2)("AIChat");
                return (0, runtime_core_esm_bundler/* openBlock */.uX)(), (0, runtime_core_esm_bundler/* createElementBlock */.CE)("div", _hoisted_1, [_cache[11] || (_cache[11] = (0, runtime_core_esm_bundler/* createElementVNode */.Lk)("nav", null, [(0, runtime_core_esm_bundler/* createElementVNode */.Lk)("h1", null, "智能管理系统")], -1)), (0, runtime_core_esm_bundler/* createElementVNode */.Lk)("main", _hoisted_2, [!$data.currentPage ? ((0, runtime_core_esm_bundler/* openBlock */.uX)(), (0, runtime_core_esm_bundler/* createElementBlock */.CE)("div", _hoisted_3, [_cache[6] || (_cache[6] = (0, runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
                    class: "welcome-section"
                }, [(0, runtime_core_esm_bundler/* createElementVNode */.Lk)("h2", null, "欢迎使用智能管理系统"), (0, runtime_core_esm_bundler/* createElementVNode */.Lk)("p", null, "请选择要操作的功能模块")], -1)), (0, runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_4, [(0, runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
                    class: "feature-card",
                    onClick: _cache[0] || (_cache[0] = (...args) => $options.enterStudentManagement && $options.enterStudentManagement(...args))
                }, [...(_cache[4] || (_cache[4] = [(0, runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
                    class: "card-icon"
                }, [(0, runtime_core_esm_bundler/* createElementVNode */.Lk)("i", {
                    class: "icon-user-group"
                }, "👥")], -1), (0, runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
                    class: "card-content"
                }, [(0, runtime_core_esm_bundler/* createElementVNode */.Lk)("h3", null, "学生管理"), (0, runtime_core_esm_bundler/* createElementVNode */.Lk)("p", null, "管理学生信息，包括添加、编辑、删除学生")], -1), (0, runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
                    class: "card-arrow"
                }, "→", -1)]))]), (0, runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
                    class: "feature-card",
                    onClick: _cache[1] || (_cache[1] = (...args) => $options.enterAIChat && $options.enterAIChat(...args))
                }, [...(_cache[5] || (_cache[5] = [(0, runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
                    class: "card-icon"
                }, [(0, runtime_core_esm_bundler/* createElementVNode */.Lk)("i", {
                    class: "icon-ai"
                }, "🤖")], -1), (0, runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
                    class: "card-content"
                }, [(0, runtime_core_esm_bundler/* createElementVNode */.Lk)("h3", null, "AI 智能助手"), (0, runtime_core_esm_bundler/* createElementVNode */.Lk)("p", null, "与DeepSeek AI对话，获取帮助和解答问题")], -1), (0, runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
                    class: "card-arrow"
                }, "→", -1)]))])])])) : $data.currentPage === 'student' ? ((0, runtime_core_esm_bundler/* openBlock */.uX)(), (0, runtime_core_esm_bundler/* createElementBlock */.CE)("div", _hoisted_5, [(0, runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_6, [(0, runtime_core_esm_bundler/* createElementVNode */.Lk)("button", {
                    class: "back-button",
                    onClick: _cache[2] || (_cache[2] = (...args) => $options.backToMain && $options.backToMain(...args))
                }, [...(_cache[7] || (_cache[7] = [(0, runtime_core_esm_bundler/* createElementVNode */.Lk)("i", {
                    class: "icon-arrow"
                }, "←", -1), (0, runtime_core_esm_bundler/* createTextVNode */.eW)(" 返回主界面 ", -1)]))]), _cache[8] || (_cache[8] = (0, runtime_core_esm_bundler/* createElementVNode */.Lk)("h2", null, "学生信息管理", -1))]), (0, runtime_core_esm_bundler/* createVNode */.bF)(_component_Dashboard)])) : $data.currentPage === 'ai' ? ((0, runtime_core_esm_bundler/* openBlock */.uX)(), (0, runtime_core_esm_bundler/* createElementBlock */.CE)("div", _hoisted_7, [(0, runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_8, [(0, runtime_core_esm_bundler/* createElementVNode */.Lk)("button", {
                    class: "back-button",
                    onClick: _cache[3] || (_cache[3] = (...args) => $options.backToMain && $options.backToMain(...args))
                }, [...(_cache[9] || (_cache[9] = [(0, runtime_core_esm_bundler/* createElementVNode */.Lk)("i", {
                    class: "icon-arrow"
                }, "←", -1), (0, runtime_core_esm_bundler/* createTextVNode */.eW)(" 返回主界面 ", -1)]))]), _cache[10] || (_cache[10] = (0, runtime_core_esm_bundler/* createElementVNode */.Lk)("h2", null, "AI 智能助手", -1))]), (0, runtime_core_esm_bundler/* createVNode */.bF)(_component_AIChat)])) : (0, runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true)])]);
            }
            ;// ./src/App.vue?vue&type=template&id=8c34f432

// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
            var shared_esm_bundler = __webpack_require__(4232);
            ;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Dashboard.vue?vue&type=template&id=1da7e23c&scoped=true

            const Dashboardvue_type_template_id_1da7e23c_scoped_true_hoisted_1 = {
                class: "dashboard-container"
            };
            const Dashboardvue_type_template_id_1da7e23c_scoped_true_hoisted_2 = {
                class: "card-content"
            };
            const Dashboardvue_type_template_id_1da7e23c_scoped_true_hoisted_3 = {
                class: "card-icon user-icon"
            };
            const Dashboardvue_type_template_id_1da7e23c_scoped_true_hoisted_4 = {
                class: "card-info"
            };
            const Dashboardvue_type_template_id_1da7e23c_scoped_true_hoisted_5 = {
                class: "card-value"
            };
            const Dashboardvue_type_template_id_1da7e23c_scoped_true_hoisted_6 = {
                class: "card-content"
            };
            const Dashboardvue_type_template_id_1da7e23c_scoped_true_hoisted_7 = {
                class: "card-icon growth-icon"
            };
            const Dashboardvue_type_template_id_1da7e23c_scoped_true_hoisted_8 = {
                class: "card-info"
            };
            const _hoisted_9 = {
                class: "card-value"
            };
            const _hoisted_10 = {
                class: "card-header"
            };
            const _hoisted_11 = {
                class: "dialog-footer"
            };

            function Dashboardvue_type_template_id_1da7e23c_scoped_true_render(_ctx, _cache, $props, $setup, $data, $options) {
                const _component_User = (0, runtime_core_esm_bundler/* resolveComponent */.g2)("User");
                const _component_el_icon = (0, runtime_core_esm_bundler/* resolveComponent */.g2)("el-icon");
                const _component_el_card = (0, runtime_core_esm_bundler/* resolveComponent */.g2)("el-card");
                const _component_el_col = (0, runtime_core_esm_bundler/* resolveComponent */.g2)("el-col");
                const _component_TrendCharts = (0, runtime_core_esm_bundler/* resolveComponent */.g2)("TrendCharts");
                const _component_el_row = (0, runtime_core_esm_bundler/* resolveComponent */.g2)("el-row");
                const _component_el_button = (0, runtime_core_esm_bundler/* resolveComponent */.g2)("el-button");
                const _component_el_table_column = (0, runtime_core_esm_bundler/* resolveComponent */.g2)("el-table-column");
                const _component_el_table = (0, runtime_core_esm_bundler/* resolveComponent */.g2)("el-table");
                const _component_el_input = (0, runtime_core_esm_bundler/* resolveComponent */.g2)("el-input");
                const _component_el_form_item = (0, runtime_core_esm_bundler/* resolveComponent */.g2)("el-form-item");
                const _component_el_form = (0, runtime_core_esm_bundler/* resolveComponent */.g2)("el-form");
                const _component_el_dialog = (0, runtime_core_esm_bundler/* resolveComponent */.g2)("el-dialog");
                const _directive_loading = (0, runtime_core_esm_bundler/* resolveDirective */.gN)("loading");
                return (0, runtime_core_esm_bundler/* openBlock */.uX)(), (0, runtime_core_esm_bundler/* createElementBlock */.CE)("div", Dashboardvue_type_template_id_1da7e23c_scoped_true_hoisted_1, [(0, runtime_core_esm_bundler/* createVNode */.bF)(_component_el_row, {
                    gutter: 20
                }, {
                    default: (0, runtime_core_esm_bundler/* withCtx */.k6)(() => [(0, runtime_core_esm_bundler/* createVNode */.bF)(_component_el_col, {
                        span: 6
                    }, {
                        default: (0, runtime_core_esm_bundler/* withCtx */.k6)(() => [(0, runtime_core_esm_bundler/* createVNode */.bF)(_component_el_card, {
                            shadow: "hover",
                            class: "stats-card"
                        }, {
                            default: (0, runtime_core_esm_bundler/* withCtx */.k6)(() => [(0, runtime_core_esm_bundler/* createElementVNode */.Lk)("div", Dashboardvue_type_template_id_1da7e23c_scoped_true_hoisted_2, [(0, runtime_core_esm_bundler/* createElementVNode */.Lk)("div", Dashboardvue_type_template_id_1da7e23c_scoped_true_hoisted_3, [(0, runtime_core_esm_bundler/* createVNode */.bF)(_component_el_icon, null, {
                                default: (0, runtime_core_esm_bundler/* withCtx */.k6)(() => [(0, runtime_core_esm_bundler/* createVNode */.bF)(_component_User)]),
                                _: 1
                            })]), (0, runtime_core_esm_bundler/* createElementVNode */.Lk)("div", Dashboardvue_type_template_id_1da7e23c_scoped_true_hoisted_4, [_cache[3] || (_cache[3] = (0, runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
                                class: "card-title"
                            }, "总用户数", -1)), (0, runtime_core_esm_bundler/* createElementVNode */.Lk)("div", Dashboardvue_type_template_id_1da7e23c_scoped_true_hoisted_5, (0, shared_esm_bundler/* toDisplayString */.v_)($setup.userCount), 1)])])]),
                            _: 1
                        })]),
                        _: 1
                    }), (0, runtime_core_esm_bundler/* createVNode */.bF)(_component_el_col, {
                        span: 6
                    }, {
                        default: (0, runtime_core_esm_bundler/* withCtx */.k6)(() => [(0, runtime_core_esm_bundler/* createVNode */.bF)(_component_el_card, {
                            shadow: "hover",
                            class: "stats-card"
                        }, {
                            default: (0, runtime_core_esm_bundler/* withCtx */.k6)(() => [(0, runtime_core_esm_bundler/* createElementVNode */.Lk)("div", Dashboardvue_type_template_id_1da7e23c_scoped_true_hoisted_6, [(0, runtime_core_esm_bundler/* createElementVNode */.Lk)("div", Dashboardvue_type_template_id_1da7e23c_scoped_true_hoisted_7, [(0, runtime_core_esm_bundler/* createVNode */.bF)(_component_el_icon, null, {
                                default: (0, runtime_core_esm_bundler/* withCtx */.k6)(() => [(0, runtime_core_esm_bundler/* createVNode */.bF)(_component_TrendCharts)]),
                                _: 1
                            })]), (0, runtime_core_esm_bundler/* createElementVNode */.Lk)("div", Dashboardvue_type_template_id_1da7e23c_scoped_true_hoisted_8, [_cache[4] || (_cache[4] = (0, runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
                                class: "card-title"
                            }, "今日增长", -1)), (0, runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_9, "+" + (0, shared_esm_bundler/* toDisplayString */.v_)($setup.todayGrowth), 1)])])]),
                            _: 1
                        })]),
                        _: 1
                    })]),
                    _: 1
                }), (0, runtime_core_esm_bundler/* createVNode */.bF)(_component_el_card, {
                    class: "table-card"
                }, {
                    header: (0, runtime_core_esm_bundler/* withCtx */.k6)(() => [(0, runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_10, [_cache[6] || (_cache[6] = (0, runtime_core_esm_bundler/* createElementVNode */.Lk)("span", null, "用户列表", -1)), (0, runtime_core_esm_bundler/* createVNode */.bF)(_component_el_button, {
                        type: "primary",
                        onClick: $setup.fetchUsers
                    }, {
                        default: (0, runtime_core_esm_bundler/* withCtx */.k6)(() => [...(_cache[5] || (_cache[5] = [(0, runtime_core_esm_bundler/* createTextVNode */.eW)("刷新", -1)]))]),
                        _: 1
                    }, 8, ["onClick"])])]),
                    default: (0, runtime_core_esm_bundler/* withCtx */.k6)(() => [(0, runtime_core_esm_bundler/* withDirectives */.bo)(((0, runtime_core_esm_bundler/* openBlock */.uX)(), (0, runtime_core_esm_bundler/* createBlock */.Wv)(_component_el_table, {
                        data: $setup.users,
                        style: {
                            "width": "100%"
                        }
                    }, {
                        default: (0, runtime_core_esm_bundler/* withCtx */.k6)(() => [(0, runtime_core_esm_bundler/* createVNode */.bF)(_component_el_table_column, {
                            prop: "id",
                            label: "ID",
                            width: "80"
                        }), (0, runtime_core_esm_bundler/* createVNode */.bF)(_component_el_table_column, {
                            prop: "name",
                            label: "姓名"
                        }), (0, runtime_core_esm_bundler/* createVNode */.bF)(_component_el_table_column, {
                            label: "操作"
                        }, {
                            default: (0, runtime_core_esm_bundler/* withCtx */.k6)(scope => [(0, runtime_core_esm_bundler/* createVNode */.bF)(_component_el_button, {
                                size: "small",
                                onClick: $event => $setup.handleEdit(scope.row)
                            }, {
                                default: (0, runtime_core_esm_bundler/* withCtx */.k6)(() => [...(_cache[7] || (_cache[7] = [(0, runtime_core_esm_bundler/* createTextVNode */.eW)("编辑", -1)]))]),
                                _: 1
                            }, 8, ["onClick"]), (0, runtime_core_esm_bundler/* createVNode */.bF)(_component_el_button, {
                                size: "small",
                                type: "danger",
                                onClick: $event => $setup.handleDelete(scope.row)
                            }, {
                                default: (0, runtime_core_esm_bundler/* withCtx */.k6)(() => [...(_cache[8] || (_cache[8] = [(0, runtime_core_esm_bundler/* createTextVNode */.eW)("删除", -1)]))]),
                                _: 1
                            }, 8, ["onClick"])]),
                            _: 1
                        })]),
                        _: 1
                    }, 8, ["data"])), [[_directive_loading, $setup.loading]])]),
                    _: 1
                }), (0, runtime_core_esm_bundler/* createVNode */.bF)(_component_el_dialog, {
                    modelValue: $setup.dialogVisible,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => $setup.dialogVisible = $event),
                    title: "添加用户",
                    width: "30%"
                }, {
                    footer: (0, runtime_core_esm_bundler/* withCtx */.k6)(() => [(0, runtime_core_esm_bundler/* createElementVNode */.Lk)("span", _hoisted_11, [(0, runtime_core_esm_bundler/* createVNode */.bF)(_component_el_button, {
                        onClick: _cache[1] || (_cache[1] = $event => $setup.dialogVisible = false)
                    }, {
                        default: (0, runtime_core_esm_bundler/* withCtx */.k6)(() => [...(_cache[9] || (_cache[9] = [(0, runtime_core_esm_bundler/* createTextVNode */.eW)("取消", -1)]))]),
                        _: 1
                    }), (0, runtime_core_esm_bundler/* createVNode */.bF)(_component_el_button, {
                        type: "primary",
                        onClick: $setup.addUser
                    }, {
                        default: (0, runtime_core_esm_bundler/* withCtx */.k6)(() => [...(_cache[10] || (_cache[10] = [(0, runtime_core_esm_bundler/* createTextVNode */.eW)("确认", -1)]))]),
                        _: 1
                    }, 8, ["onClick"])])]),
                    default: (0, runtime_core_esm_bundler/* withCtx */.k6)(() => [(0, runtime_core_esm_bundler/* createVNode */.bF)(_component_el_form, {
                        model: $setup.newUser,
                        "label-width": "80px"
                    }, {
                        default: (0, runtime_core_esm_bundler/* withCtx */.k6)(() => [(0, runtime_core_esm_bundler/* createVNode */.bF)(_component_el_form_item, {
                            label: "姓名"
                        }, {
                            default: (0, runtime_core_esm_bundler/* withCtx */.k6)(() => [(0, runtime_core_esm_bundler/* createVNode */.bF)(_component_el_input, {
                                modelValue: $setup.newUser.name,
                                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $setup.newUser.name = $event),
                                autocomplete: "off"
                            }, null, 8, ["modelValue"])]),
                            _: 1
                        })]),
                        _: 1
                    }, 8, ["model"])]),
                    _: 1
                }, 8, ["modelValue"])]);
            }
            ;// ./src/components/Dashboard.vue?vue&type=template&id=1da7e23c&scoped=true

// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
            var reactivity_esm_bundler = __webpack_require__(144);
// EXTERNAL MODULE: ./node_modules/element-plus/es/components/message/index.mjs + 4 modules
            var message = __webpack_require__(1219);
            ;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Dashboard.vue?vue&type=script&lang=js


            /* harmony default export */
            var Dashboardvue_type_script_lang_js = ({
                name: 'DashboardView',
                setup() {
                    const users = (0, reactivity_esm_bundler/* ref */.KR)([]);
                    const loading = (0, reactivity_esm_bundler/* ref */.KR)(false);
                    const dialogVisible = (0, reactivity_esm_bundler/* ref */.KR)(false);
                    const newUser = (0, reactivity_esm_bundler/* ref */.KR)({
                        name: ''
                    });
                    const userCount = (0, reactivity_esm_bundler/* ref */.KR)(0);
                    const todayGrowth = (0, reactivity_esm_bundler/* ref */.KR)(5);
                    const fetchUsers = async () => {
                        loading.value = true;
                        try {
                            const response = await fetch('/api/users');
                            users.value = await response.json();
                            userCount.value = users.value.length;
                        } catch (error) {
                            message/* ElMessage */.nk.error('获取用户数据失败');
                        } finally {
                            loading.value = false;
                        }
                    };
                    const addUser = async () => {
                        if (!newUser.value.name.trim()) {
                            message/* ElMessage */.nk.warning('请输入用户姓名');
                            return;
                        }
                        try {
                            const response = await fetch('/api/users', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(newUser.value)
                            });
                            if (response.ok) {
                                message/* ElMessage */.nk.success('用户添加成功');
                                dialogVisible.value = false;
                                newUser.value.name = '';
                                fetchUsers();
                            }
                        } catch (error) {
                            message/* ElMessage */.nk.error('添加用户失败');
                        }
                    };
                    const handleEdit = user => {
                        message/* ElMessage */.nk.info(`编辑用户: ${user.name}`);
                    };
                    const handleDelete = async user => {
                        try {
                            const response = await fetch(`/api/users/${user.id}`, {
                                method: 'DELETE'
                            });
                            if (response.ok) {
                                message/* ElMessage */.nk.success('用户删除成功');
                                fetchUsers();
                            }
                        } catch (error) {
                            message/* ElMessage */.nk.error('删除用户失败');
                        }
                    };
                    (0, runtime_core_esm_bundler/* onMounted */.sV)(() => {
                        fetchUsers();
                    });
                    return {
                        users,
                        loading,
                        dialogVisible,
                        newUser,
                        userCount,
                        todayGrowth,
                        fetchUsers,
                        addUser,
                        handleEdit,
                        handleDelete
                    };
                }
            });
            ;// ./src/components/Dashboard.vue?vue&type=script&lang=js

            ;// ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Dashboard.vue?vue&type=style&index=0&id=1da7e23c&scoped=true&lang=css
// extracted by mini-css-extract-plugin

            ;// ./src/components/Dashboard.vue?vue&type=style&index=0&id=1da7e23c&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
            var exportHelper = __webpack_require__(1241);
            ;// ./src/components/Dashboard.vue


            ;


            const __exports__ = /*#__PURE__*/(0, exportHelper/* default */.A)(Dashboardvue_type_script_lang_js, [['render', Dashboardvue_type_template_id_1da7e23c_scoped_true_render], ['__scopeId', "data-v-1da7e23c"]])

            /* harmony default export */
            var Dashboard = (__exports__);
            ;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AI.vue?vue&type=template&id=6843cce8

            const AIvue_type_template_id_6843cce8_hoisted_1 = {
                id: "app"
            };
            const AIvue_type_template_id_6843cce8_hoisted_2 = {
                class: "main-content"
            };
            const AIvue_type_template_id_6843cce8_hoisted_3 = {
                key: 0,
                class: "main-dashboard"
            };
            const AIvue_type_template_id_6843cce8_hoisted_4 = {
                class: "feature-cards"
            };
            const AIvue_type_template_id_6843cce8_hoisted_5 = {
                key: 1,
                class: "page-container"
            };
            const AIvue_type_template_id_6843cce8_hoisted_6 = {
                class: "page-header"
            };
            const AIvue_type_template_id_6843cce8_hoisted_7 = {
                key: 2,
                class: "page-container"
            };
            const AIvue_type_template_id_6843cce8_hoisted_8 = {
                class: "page-header"
            };

            function AIvue_type_template_id_6843cce8_render(_ctx, _cache, $props, $setup, $data, $options) {
                const _component_Dashboard = (0, runtime_core_esm_bundler/* resolveComponent */.g2)("Dashboard");
                const _component_AIChat = (0, runtime_core_esm_bundler/* resolveComponent */.g2)("AIChat");
                return (0, runtime_core_esm_bundler/* openBlock */.uX)(), (0, runtime_core_esm_bundler/* createElementBlock */.CE)("div", AIvue_type_template_id_6843cce8_hoisted_1, [_cache[9] || (_cache[9] = (0, runtime_core_esm_bundler/* createElementVNode */.Lk)("nav", null, [(0, runtime_core_esm_bundler/* createElementVNode */.Lk)("h1", null, "智能管理系统")], -1)), (0, runtime_core_esm_bundler/* createElementVNode */.Lk)("main", AIvue_type_template_id_6843cce8_hoisted_2, [$data.currentPage === '' ? ((0, runtime_core_esm_bundler/* openBlock */.uX)(), (0, runtime_core_esm_bundler/* createElementBlock */.CE)("div", AIvue_type_template_id_6843cce8_hoisted_3, [_cache[6] || (_cache[6] = (0, runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
                    class: "welcome-section"
                }, [(0, runtime_core_esm_bundler/* createElementVNode */.Lk)("h2", null, "欢迎使用智能管理系统"), (0, runtime_core_esm_bundler/* createElementVNode */.Lk)("p", null, "请选择要操作的功能模块")], -1)), (0, runtime_core_esm_bundler/* createElementVNode */.Lk)("div", AIvue_type_template_id_6843cce8_hoisted_4, [(0, runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
                    class: "feature-card",
                    onClick: _cache[0] || (_cache[0] = $event => $data.currentPage = 'student')
                }, [...(_cache[4] || (_cache[4] = [(0, runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
                    class: "card-icon student-icon"
                }, [(0, runtime_core_esm_bundler/* createElementVNode */.Lk)("i", null, "👥")], -1), (0, runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
                    class: "card-content"
                }, [(0, runtime_core_esm_bundler/* createElementVNode */.Lk)("h3", null, "学生管理"), (0, runtime_core_esm_bundler/* createElementVNode */.Lk)("p", null, "管理学生基本信息")], -1)]))]), (0, runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
                    class: "feature-card",
                    onClick: _cache[1] || (_cache[1] = $event => $data.currentPage = 'ai')
                }, [...(_cache[5] || (_cache[5] = [(0, runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
                    class: "card-icon ai-icon"
                }, [(0, runtime_core_esm_bundler/* createElementVNode */.Lk)("i", null, "🤖")], -1), (0, runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
                    class: "card-content"
                }, [(0, runtime_core_esm_bundler/* createElementVNode */.Lk)("h3", null, "智能问答"), (0, runtime_core_esm_bundler/* createElementVNode */.Lk)("p", null, "向AI提问任何问题")], -1)]))])])])) : (0, runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true), $data.currentPage === 'student' ? ((0, runtime_core_esm_bundler/* openBlock */.uX)(), (0, runtime_core_esm_bundler/* createElementBlock */.CE)("div", AIvue_type_template_id_6843cce8_hoisted_5, [(0, runtime_core_esm_bundler/* createElementVNode */.Lk)("div", AIvue_type_template_id_6843cce8_hoisted_6, [(0, runtime_core_esm_bundler/* createElementVNode */.Lk)("button", {
                    class: "back-button",
                    onClick: _cache[2] || (_cache[2] = $event => $data.currentPage = '')
                }, " ← 返回主界面 "), _cache[7] || (_cache[7] = (0, runtime_core_esm_bundler/* createElementVNode */.Lk)("h2", null, "学生信息管理", -1))]), (0, runtime_core_esm_bundler/* createVNode */.bF)(_component_Dashboard)])) : (0, runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true), $data.currentPage === 'ai' ? ((0, runtime_core_esm_bundler/* openBlock */.uX)(), (0, runtime_core_esm_bundler/* createElementBlock */.CE)("div", AIvue_type_template_id_6843cce8_hoisted_7, [(0, runtime_core_esm_bundler/* createElementVNode */.Lk)("div", AIvue_type_template_id_6843cce8_hoisted_8, [(0, runtime_core_esm_bundler/* createElementVNode */.Lk)("button", {
                    class: "back-button",
                    onClick: _cache[3] || (_cache[3] = $event => $data.currentPage = '')
                }, " ← 返回主界面 "), _cache[8] || (_cache[8] = (0, runtime_core_esm_bundler/* createElementVNode */.Lk)("h2", null, "智能问答", -1))]), (0, runtime_core_esm_bundler/* createVNode */.bF)(_component_AIChat)])) : (0, runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true)])]);
            }
            ;// ./src/components/AI.vue?vue&type=template&id=6843cce8

            ;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AI.vue?vue&type=script&lang=js


            /* harmony default export */
            var AIvue_type_script_lang_js = ({
                name: 'App',
                components: {
                    Dashboard: Dashboard,
                    AIChat: AI
                },
                data() {
                    return {
                        currentPage: '' // 'student', 'ai', or ''
                    };
                }
            });
            ;// ./src/components/AI.vue?vue&type=script&lang=js

            ;// ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AI.vue?vue&type=style&index=0&id=6843cce8&lang=css
// extracted by mini-css-extract-plugin

            ;// ./src/components/AI.vue?vue&type=style&index=0&id=6843cce8&lang=css

            ;// ./src/components/AI.vue


            ;


            const AI_exports_ = /*#__PURE__*/(0, exportHelper/* default */.A)(AIvue_type_script_lang_js, [['render', AIvue_type_template_id_6843cce8_render]])

            /* harmony default export */
            var AI = (AI_exports_);
            ;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=script&lang=js


            /* harmony default export */
            var Appvue_type_script_lang_js = ({
                name: 'App',
                components: {
                    Dashboard: Dashboard,
                    AIChat: AI
                },
                data() {
                    return {
                        currentPage: '' // 'student', 'ai', or ''
                    };
                },
                methods: {
                    enterStudentManagement() {
                        this.currentPage = 'student';
                    },
                    enterAIChat() {
                        this.currentPage = 'ai';
                    },
                    backToMain() {
                        this.currentPage = '';
                    }
                }
            });
            ;// ./src/App.vue?vue&type=script&lang=js

            ;// ./src/App.vue


            ;
            const App_exports_ = /*#__PURE__*/(0, exportHelper/* default */.A)(Appvue_type_script_lang_js, [['render', render]])

            /* harmony default export */
            var App = (App_exports_);
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.mjs + 1 modules
            var vue_router = __webpack_require__(8512);
            ;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/UserList.vue?vue&type=template&id=7a6b2280&scoped=true

            const UserListvue_type_template_id_7a6b2280_scoped_true_hoisted_1 = {
                class: "user-list"
            };
            const UserListvue_type_template_id_7a6b2280_scoped_true_hoisted_2 = {
                class: "add-user-form"
            };
            const UserListvue_type_template_id_7a6b2280_scoped_true_hoisted_3 = {
                class: "user-table"
            };
            const UserListvue_type_template_id_7a6b2280_scoped_true_hoisted_4 = ["onClick"];

            function UserListvue_type_template_id_7a6b2280_scoped_true_render(_ctx, _cache, $props, $setup, $data, $options) {
                return (0, runtime_core_esm_bundler/* openBlock */.uX)(), (0, runtime_core_esm_bundler/* createElementBlock */.CE)("div", UserListvue_type_template_id_7a6b2280_scoped_true_hoisted_1, [_cache[3] || (_cache[3] = (0, runtime_core_esm_bundler/* createElementVNode */.Lk)("h2", null, "用户管理", -1)), (0, runtime_core_esm_bundler/* createElementVNode */.Lk)("div", UserListvue_type_template_id_7a6b2280_scoped_true_hoisted_2, [(0, runtime_core_esm_bundler/* withDirectives */.bo)((0, runtime_core_esm_bundler/* createElementVNode */.Lk)("input", {
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $data.newUserName = $event),
                    placeholder: "输入用户名"
                }, null, 512), [[runtime_dom_esm_bundler/* vModelText */.Jo, $data.newUserName]]), (0, runtime_core_esm_bundler/* createElementVNode */.Lk)("button", {
                    onClick: _cache[1] || (_cache[1] = (...args) => $options.addUser && $options.addUser(...args))
                }, "添加用户")]), (0, runtime_core_esm_bundler/* createElementVNode */.Lk)("div", UserListvue_type_template_id_7a6b2280_scoped_true_hoisted_3, [(0, runtime_core_esm_bundler/* createElementVNode */.Lk)("table", null, [_cache[2] || (_cache[2] = (0, runtime_core_esm_bundler/* createElementVNode */.Lk)("thead", null, [(0, runtime_core_esm_bundler/* createElementVNode */.Lk)("tr", null, [(0, runtime_core_esm_bundler/* createElementVNode */.Lk)("th", null, "ID"), (0, runtime_core_esm_bundler/* createElementVNode */.Lk)("th", null, "姓名"), (0, runtime_core_esm_bundler/* createElementVNode */.Lk)("th", null, "操作")])], -1)), (0, runtime_core_esm_bundler/* createElementVNode */.Lk)("tbody", null, [((0, runtime_core_esm_bundler/* openBlock */.uX)(true), (0, runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, null, (0, runtime_core_esm_bundler/* renderList */.pI)($data.users, user => {
                    return (0, runtime_core_esm_bundler/* openBlock */.uX)(), (0, runtime_core_esm_bundler/* createElementBlock */.CE)("tr", {
                        key: user.id
                    }, [(0, runtime_core_esm_bundler/* createElementVNode */.Lk)("td", null, (0, shared_esm_bundler/* toDisplayString */.v_)(user.id), 1), (0, runtime_core_esm_bundler/* createElementVNode */.Lk)("td", null, (0, shared_esm_bundler/* toDisplayString */.v_)(user.name), 1), (0, runtime_core_esm_bundler/* createElementVNode */.Lk)("td", null, [(0, runtime_core_esm_bundler/* createElementVNode */.Lk)("button", {
                        onClick: $event => $options.deleteUser(user.id)
                    }, "删除", 8, UserListvue_type_template_id_7a6b2280_scoped_true_hoisted_4)])]);
                }), 128))])])])]);
            }
            ;// ./src/views/UserList.vue?vue&type=template&id=7a6b2280&scoped=true

            ;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/UserList.vue?vue&type=script&lang=js
            /* harmony default export */
            var UserListvue_type_script_lang_js = ({
                name: 'UserList',
                data() {
                    return {
                        users: [],
                        newUserName: ''
                    };
                },
                async mounted() {
                    await this.loadUsers();
                },
                methods: {
                    async loadUsers() {
                        try {
                            const response = await this.$http.get('/users');
                            this.users = response.data;
                        } catch (error) {
                            console.error('加载用户失败:', error);
                        }
                    },
                    async addUser() {
                        if (!this.newUserName.trim()) return;
                        try {
                            await this.$http.post('/users', {
                                name: this.newUserName
                            });
                            this.newUserName = '';
                            await this.loadUsers(); // 重新加载用户列表
                        } catch (error) {
                            console.error('添加用户失败:', error);
                        }
                    },
                    async deleteUser(id) {
                        try {
                            await this.$http.delete(`/users/${id}`);
                            await this.loadUsers(); // 重新加载用户列表
                        } catch (error) {
                            console.error('删除用户失败:', error);
                        }
                    }
                }
            });
            ;// ./src/views/UserList.vue?vue&type=script&lang=js

            ;// ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/UserList.vue?vue&type=style&index=0&id=7a6b2280&scoped=true&lang=css
// extracted by mini-css-extract-plugin

            ;// ./src/views/UserList.vue?vue&type=style&index=0&id=7a6b2280&scoped=true&lang=css

            ;// ./src/views/UserList.vue


            ;


            const UserList_exports_ = /*#__PURE__*/(0, exportHelper/* default */.A)(UserListvue_type_script_lang_js, [['render', UserListvue_type_template_id_7a6b2280_scoped_true_render], ['__scopeId', "data-v-7a6b2280"]])

            /* harmony default export */
            var UserList = (UserList_exports_);
            ;// ./src/router/index.js


            const routes = [{
                path: '/',
                name: 'UserList',
                component: UserList
            }];
            const router = (0, vue_router/* createRouter */.aE)({
                history: (0, vue_router/* createWebHistory */.LA)(""),
                routes
            });
            /* harmony default export */
            var src_router = (router);
// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 48 modules
            var axios = __webpack_require__(4373);
// EXTERNAL MODULE: ./node_modules/element-plus/es/defaults.mjs + 784 modules
            var defaults = __webpack_require__(1874);
// EXTERNAL MODULE: ./node_modules/element-plus/dist/index.css
            var dist = __webpack_require__(4188);
// EXTERNAL MODULE: ./node_modules/@element-plus/icons-vue/dist/index.js
            var icons_vue_dist = __webpack_require__(7477);
            ;// ./src/main.js


//import store from './store'


// Element Plus 配置


// 配置axios基准URL
            axios/* default */.A.defaults.baseURL = '/api';

// 创建应用实例
            const app = (0, runtime_dom_esm_bundler/* createApp */.Ef)(App);

// 使用插件
//app.use(store)
            app.use(src_router);
            app.use(defaults/* default */.A);

// 注册所有图标
            for (const [key, component] of Object.entries(icons_vue_dist)) {
                app.component(key, component);
            }

// 将axios挂载到全局
            app.config.globalProperties.$http = axios/* default */.A;

// 挂载应用
            app.mount('#app');

            /***/
        })

        /******/
    });
    /************************************************************************/
    /******/ 	// The module cache
    /******/
    var __webpack_module_cache__ = {};
    /******/
    /******/ 	// The require function
    /******/
    function __webpack_require__(moduleId) {
        /******/ 		// Check if module is in cache
        /******/
        var cachedModule = __webpack_module_cache__[moduleId];
        /******/
        if (cachedModule !== undefined) {
            /******/
            return cachedModule.exports;
            /******/
        }
        /******/ 		// Create a new module (and put it into the cache)
        /******/
        var module = __webpack_module_cache__[moduleId] = {
            /******/ 			// no module.id needed
            /******/ 			// no module.loaded needed
            /******/            exports: {}
            /******/
        };
        /******/
        /******/ 		// Execute the module function
        /******/
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ 		// Return the exports of the module
        /******/
        return module.exports;
        /******/
    }

    /******/
    /******/ 	// expose the modules object (__webpack_modules__)
    /******/
    __webpack_require__.m = __webpack_modules__;
    /******/
    /************************************************************************/
    /******/ 	/* webpack/runtime/chunk loaded */
    /******/
    !function () {
        /******/
        var deferred = [];
        /******/
        __webpack_require__.O = function (result, chunkIds, fn, priority) {
            /******/
            if (chunkIds) {
                /******/
                priority = priority || 0;
                /******/
                for (var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
                /******/
                deferred[i] = [chunkIds, fn, priority];
                /******/
                return;
                /******/
            }
            /******/
            var notFulfilled = Infinity;
            /******/
            for (var i = 0; i < deferred.length; i++) {
                /******/
                var chunkIds = deferred[i][0];
                /******/
                var fn = deferred[i][1];
                /******/
                var priority = deferred[i][2];
                /******/
                var fulfilled = true;
                /******/
                for (var j = 0; j < chunkIds.length; j++) {
                    /******/
                    if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function (key) {
                        return __webpack_require__.O[key](chunkIds[j]);
                    })) {
                        /******/
                        chunkIds.splice(j--, 1);
                        /******/
                    } else {
                        /******/
                        fulfilled = false;
                        /******/
                        if (priority < notFulfilled) notFulfilled = priority;
                        /******/
                    }
                    /******/
                }
                /******/
                if (fulfilled) {
                    /******/
                    deferred.splice(i--, 1)
                    /******/
                    var r = fn();
                    /******/
                    if (r !== undefined) result = r;
                    /******/
                }
                /******/
            }
            /******/
            return result;
            /******/
        };
        /******/
    }();
    /******/
    /******/ 	/* webpack/runtime/compat get default export */
    /******/
    !function () {
        /******/ 		// getDefaultExport function for compatibility with non-harmony modules
        /******/
        __webpack_require__.n = function (module) {
            /******/
            var getter = module && module.__esModule ?
                /******/                function () {
                    return module['default'];
                } :
                /******/                function () {
                    return module;
                };
            /******/
            __webpack_require__.d(getter, {a: getter});
            /******/
            return getter;
            /******/
        };
        /******/
    }();
    /******/
    /******/ 	/* webpack/runtime/define property getters */
    /******/
    !function () {
        /******/ 		// define getter functions for harmony exports
        /******/
        __webpack_require__.d = function (exports, definition) {
            /******/
            for (var key in definition) {
                /******/
                if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
                    /******/
                    Object.defineProperty(exports, key, {enumerable: true, get: definition[key]});
                    /******/
                }
                /******/
            }
            /******/
        };
        /******/
    }();
    /******/
    /******/ 	/* webpack/runtime/global */
    /******/
    !function () {
        /******/
        __webpack_require__.g = (function () {
            /******/
            if (typeof globalThis === 'object') return globalThis;
            /******/
            try {
                /******/
                return this || new Function('return this')();
                /******/
            } catch (e) {
                /******/
                if (typeof window === 'object') return window;
                /******/
            }
            /******/
        })();
        /******/
    }();
    /******/
    /******/ 	/* webpack/runtime/hasOwnProperty shorthand */
    /******/
    !function () {
        /******/
        __webpack_require__.o = function (obj, prop) {
            return Object.prototype.hasOwnProperty.call(obj, prop);
        }
        /******/
    }();
    /******/
    /******/ 	/* webpack/runtime/make namespace object */
    /******/
    !function () {
        /******/ 		// define __esModule on exports
        /******/
        __webpack_require__.r = function (exports) {
            /******/
            if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                /******/
                Object.defineProperty(exports, Symbol.toStringTag, {value: 'Module'});
                /******/
            }
            /******/
            Object.defineProperty(exports, '__esModule', {value: true});
            /******/
        };
        /******/
    }();
    /******/
    /******/ 	/* webpack/runtime/jsonp chunk loading */
    /******/
    !function () {
        /******/ 		// no baseURI
        /******/
        /******/ 		// object to store loaded and loading chunks
        /******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
        /******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
        /******/
        var installedChunks = {
            /******/            524: 0
            /******/
        };
        /******/
        /******/ 		// no chunk on demand loading
        /******/
        /******/ 		// no prefetching
        /******/
        /******/ 		// no preloaded
        /******/
        /******/ 		// no HMR
        /******/
        /******/ 		// no HMR manifest
        /******/
        /******/
        __webpack_require__.O.j = function (chunkId) {
            return installedChunks[chunkId] === 0;
        };
        /******/
        /******/ 		// install a JSONP callback for chunk loading
        /******/
        var webpackJsonpCallback = function (parentChunkLoadingFunction, data) {
            /******/
            var chunkIds = data[0];
            /******/
            var moreModules = data[1];
            /******/
            var runtime = data[2];
            /******/ 			// add "moreModules" to the modules object,
            /******/ 			// then flag all "chunkIds" as loaded and fire callback
            /******/
            var moduleId, chunkId, i = 0;
            /******/
            if (chunkIds.some(function (id) {
                return installedChunks[id] !== 0;
            })) {
                /******/
                for (moduleId in moreModules) {
                    /******/
                    if (__webpack_require__.o(moreModules, moduleId)) {
                        /******/
                        __webpack_require__.m[moduleId] = moreModules[moduleId];
                        /******/
                    }
                    /******/
                }
                /******/
                if (runtime) var result = runtime(__webpack_require__);
                /******/
            }
            /******/
            if (parentChunkLoadingFunction) parentChunkLoadingFunction(data);
            /******/
            for (; i < chunkIds.length; i++) {
                /******/
                chunkId = chunkIds[i];
                /******/
                if (__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
                    /******/
                    installedChunks[chunkId][0]();
                    /******/
                }
                /******/
                installedChunks[chunkId] = 0;
                /******/
            }
            /******/
            return __webpack_require__.O(result);
            /******/
        }
        /******/
        /******/
        var chunkLoadingGlobal = self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || [];
        /******/
        chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
        /******/
        chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
        /******/
    }();
    /******/
    /************************************************************************/
    /******/
    /******/ 	// startup
    /******/ 	// Load entry module and return exports
    /******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
    /******/
    var __webpack_exports__ = __webpack_require__.O(undefined, [504], function () {
        return __webpack_require__(2445);
    })
    /******/
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
    /******/
    /******/
})()
;
//# sourceMappingURL=app.js.map