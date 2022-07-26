"use strict";
exports.id = 803;
exports.ids = [803];
exports.modules = {

/***/ 803:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(111);
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_hi__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(750);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__);



const projectList = [
    {
        title: "Personal website",
        subHead: "ReactJS",
        git: "https://github.com/alexphl/alexphl.github.io",
        ext: null,
        inProgress: true
    },
    {
        title: "Dalhousie Schedule Builder",
        subHead: "Next.js, TypeScript",
        git: "https://github.com/alexphl/dal_schedule_builder",
        ext: null,
        inProgress: true
    },
    {
        title: "Barter - Android App",
        subHead: "Java, Firebase",
        git: "https://github.com/alexphl/csci3130-t7-online-barter-trading",
        ext: null,
        inProgress: false
    },
    {
        title: "Job Portal web app",
        subHead: "JS, PHP, MySQL",
        git: "https://github.com/alexphl/jobportal_IA",
        ext: "https://web.cs.dal.ca/~olexiy/jobportal/",
        inProgress: false
    }, 
];
const Projects = (props)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        id: "projects",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                children: "My Projects"
            }),
            projectList.map((project)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "project",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                            children: project.title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: project.subHead
                        }),
                        project.ext && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: project.ext,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_hi__WEBPACK_IMPORTED_MODULE_1__.HiOutlineExternalLink, {
                                className: "icon"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: project.git,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiGithub, {
                                className: "icon"
                            })
                        })
                    ]
                }, project.git))
        ]
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Projects);


/***/ })

};
;