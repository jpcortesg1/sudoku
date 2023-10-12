(() => {
var exports = {};
exports.id = 931;
exports.ids = [931];
exports.modules = {

/***/ 8038:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ 8704:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-dom/server-rendering-stub");

/***/ }),

/***/ 7897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-server-dom-webpack/client");

/***/ }),

/***/ 6786:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react/jsx-runtime");

/***/ }),

/***/ 5868:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/app-render");

/***/ }),

/***/ 1844:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/get-segment-param");

/***/ }),

/***/ 6624:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/helpers/interception-routes");

/***/ }),

/***/ 5281:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module");

/***/ }),

/***/ 7085:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context");

/***/ }),

/***/ 199:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hash");

/***/ }),

/***/ 9569:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hooks-client-context");

/***/ }),

/***/ 893:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix");

/***/ }),

/***/ 7887:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/handle-smooth-scroll");

/***/ }),

/***/ 8735:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot");

/***/ }),

/***/ 8231:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path");

/***/ }),

/***/ 4614:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix");

/***/ }),

/***/ 3750:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash");

/***/ }),

/***/ 9618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/server-inserted-html");

/***/ }),

/***/ 1017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 7310:
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 4807:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalError: () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default.a),
/* harmony export */   __next_app__: () => (/* binding */ __next_app__),
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   pages: () => (/* binding */ pages),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   tree: () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4813);
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1314);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5909);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7886);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__) if(["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
// @ts-ignore this need to be imported from next/dist to be external


const AppPageRouteModule = next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__.AppPageRouteModule;
// We inject the tree and pages here so that we can use them in the route
// module.
const tree = {
        children: [
        '',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 148)), "/home/jpcortesg/Escritorio/sudoku/src/app/page.tsx"],
          metadata: {
    icon: [(async (props) => (await Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 6716))).default(props))],
    apple: [],
    openGraph: [],
    twitter: [],
    manifest: undefined
  }
        }]
      },
        {
        'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 272)), "/home/jpcortesg/Escritorio/sudoku/src/app/layout.tsx"],
'not-found': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3234, 23)), "next/dist/client/components/not-found-error"],
        metadata: {
    icon: [(async (props) => (await Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 6716))).default(props))],
    apple: [],
    openGraph: [],
    twitter: [],
    manifest: undefined
  }
      }
      ]
      }.children;
const pages = ["/home/jpcortesg/Escritorio/sudoku/src/app/page.tsx"];

// @ts-expect-error - replaced by webpack/turbopack loader

const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_PAGE,
        page: "/page",
        pathname: "/",
        // The following aren't used in production.
        bundlePath: "",
        filename: "",
        appPaths: []
    },
    userland: {
        loaderTree: tree
    }
});

//# sourceMappingURL=app-page.js.map

/***/ }),

/***/ 3349:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 8401, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9670, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3888, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3081, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9306, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3297, 23))

/***/ }),

/***/ 135:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 815))

/***/ }),

/***/ 7819:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9215))

/***/ }),

/***/ 815:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.18_react-dom@18.2.0_react@18.2.0/node_modules/next/font/google/target.css?{"path":"src/app/layout.tsx","import":"Montserrat","arguments":[{"subsets":["latin"]}],"variableName":"montserrat"}
var layout_tsx_import_Montserrat_arguments_subsets_latin_variableName_montserrat_ = __webpack_require__(7232);
var layout_tsx_import_Montserrat_arguments_subsets_latin_variableName_montserrat_default = /*#__PURE__*/__webpack_require__.n(layout_tsx_import_Montserrat_arguments_subsets_latin_variableName_montserrat_);
// EXTERNAL MODULE: ./src/app/globals.css
var globals = __webpack_require__(5331);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-redux@8.1.3_@types+react-dom@18.2.7_@types+react@18.2.20_react-dom@18.2.0_react@18.2.0_redux@4.2.1/node_modules/react-redux/lib/index.js
var lib = __webpack_require__(7339);
// EXTERNAL MODULE: ./node_modules/.pnpm/@reduxjs+toolkit@1.9.7_react-redux@8.1.3_react@18.2.0/node_modules/@reduxjs/toolkit/dist/redux-toolkit.cjs.production.min.js
var redux_toolkit_cjs_production_min = __webpack_require__(7118);
// EXTERNAL MODULE: ./src/features/configuration/configurationSlice.ts
var configurationSlice = __webpack_require__(4912);
// EXTERNAL MODULE: ./src/features/sudoku/sudokuSlice.ts
var sudokuSlice = __webpack_require__(3040);
// EXTERNAL MODULE: ./src/features/popUps/poUpsSlice.ts
var poUpsSlice = __webpack_require__(5200);
;// CONCATENATED MODULE: ./src/store.ts




const store = (0,redux_toolkit_cjs_production_min.configureStore)({
    reducer: {
        configuration: configurationSlice/* default */.ZP,
        sudoku: sudokuSlice/* default */.ZP,
        popUp: poUpsSlice/* default */.ZP
    }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/cookies-next@2.1.2/node_modules/cookies-next/lib/index.js
var cookies_next_lib = __webpack_require__(8002);
// EXTERNAL MODULE: ./src/enum/Theme.ts
var Theme = __webpack_require__(4875);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
;// CONCATENATED MODULE: ./src/hooks/theme/useLoadCurrentTheme.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




function useLoadCurrentTheme() {
    const themeCookie = (0,cookies_next_lib.getCookie)("theme");
    const currentTheme = (0,Theme/* getValidTheme */.f)(themeCookie);
    const dispatch = (0,lib.useDispatch)();
    (0,react_.useEffect)(()=>{
        dispatch((0,configurationSlice/* setTheme */.Dc)(currentTheme));
    }, [
        dispatch,
        currentTheme
    ]);
    return currentTheme;
}

// EXTERNAL MODULE: ./src/hooks/redux/useGetConfiguration.tsx
var useGetConfiguration = __webpack_require__(3909);
;// CONCATENATED MODULE: ./src/app/layout.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 






function ChildComponent({ children }) {
    useLoadCurrentTheme();
    const configuration = (0,useGetConfiguration/* default */.Z)();
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            style: {
                background: configuration?.firstColor,
                color: configuration.thirdColor
            },
            className: (layout_tsx_import_Montserrat_arguments_subsets_latin_variableName_montserrat_default()).className,
            children: children
        })
    });
}
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(lib.Provider, {
        store: store,
        children: /*#__PURE__*/ jsx_runtime_.jsx(ChildComponent, {
            children: children
        })
    });
}


/***/ }),

/***/ 9215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-redux@8.1.3_@types+react-dom@18.2.7_@types+react@18.2.20_react-dom@18.2.0_react@18.2.0_redux@4.2.1/node_modules/react-redux/lib/index.js
var lib = __webpack_require__(7339);
;// CONCATENATED MODULE: ./src/enum/Level.ts
var Level;
(function(Level) {
    Level[Level["EASY"] = 38] = "EASY";
    Level[Level["MEDIUM"] = 30] = "MEDIUM";
    Level[Level["HARD"] = 24] = "HARD";
    Level[Level["EXTREME"] = 20] = "EXTREME";
    Level[Level["INSANE"] = 17] = "INSANE";
})(Level || (Level = {}));
/* harmony default export */ const enum_Level = (Level);

// EXTERNAL MODULE: ./src/hooks/redux/useGetConfiguration.tsx
var useGetConfiguration = __webpack_require__(3909);
// EXTERNAL MODULE: ./src/features/sudoku/sudokuSlice.ts
var sudokuSlice = __webpack_require__(3040);
;// CONCATENATED MODULE: ./src/components/Cell/NotesCell.tsx





function NotesCell(props) {
    const { style, row, col } = props;
    const numbers = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
    ];
    const [notes, setNotes] = (0,react_.useState)(numbers.map((num)=>({
            value: num,
            active: false
        })));
    const [iscorrect, setIsCorrect] = (0,react_.useState)(false);
    const configuration = (0,useGetConfiguration/* default */.Z)();
    const { isEditMode, currentCell, currentPanel, emptySudoku, clcikedDeleteButton } = (0,lib.useSelector)((state)=>state.sudoku);
    const dispatch = (0,lib.useDispatch)();
    (0,react_.useEffect)(()=>{
        if (!currentCell) return;
        const { row: rowCurrent, col: colCurrent } = currentCell;
        if (rowCurrent === row && colCurrent === col) {
            setNotes((prev)=>[
                    ...prev.map((note)=>({
                            ...note,
                            active: note.value == currentPanel ? !note.active : note.active
                        }))
                ]);
        }
        dispatch((0,sudokuSlice/* setCurrentPanel */._V)(null));
    }, [
        currentCell,
        col,
        row,
        currentPanel,
        dispatch
    ]);
    (0,react_.useEffect)(()=>{
        if (!emptySudoku) return;
        if (!emptySudoku[row][col]) {
            setIsCorrect(false);
            return;
        }
        setIsCorrect(true);
    }, [
        emptySudoku,
        row,
        col
    ]);
    // Check each time the currentCell changes, to set acvtive notes
    (0,react_.useEffect)(()=>{
        const rowStart = Math.floor(Number(row) / 3) * 3;
        const colStart = Math.floor(Number(col) / 3) * 3;
        const rows = [
            rowStart,
            rowStart + 1,
            rowStart + 2
        ];
        const cols = [
            colStart,
            colStart + 1,
            colStart + 2
        ];
        const isRow = rows.includes(currentCell?.row);
        const isCol = cols.includes(currentCell?.col);
        const selected = emptySudoku[currentCell?.row][currentCell?.col];
        if ((currentCell?.row === row || currentCell?.col === col || isRow && isCol) && selected !== null) {
            setNotes((prev)=>[
                    ...prev.map((note)=>({
                            ...note,
                            active: note.value === selected ? false : note.active
                        }))
                ]);
        }
    }, [
        currentCell,
        col,
        row,
        emptySudoku
    ]);
    // Listen when clicked delete button
    /* eslint-disable */ (0,react_.useEffect)(()=>{
        const { row: currentRow, col: currentCol } = currentCell;
        if (currentCol === col && currentRow === row) {
            setNotes((current)=>current.map((note)=>({
                        ...note,
                        active: false
                    })));
        }
    }, [
        clcikedDeleteButton,
        row,
        col
    ]);
    /* eslint-enable */ return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "absolute left-0 top-0 bg-slate-300 w-full h-full border-b-2 border-r-2 grid-rows-3 grid-cols-3 grid text-xs justify-items-center p-1",
        style: {
            ...style,
            cursor: "pointer",
            zIndex: isEditMode && !iscorrect ? 2 : -1
        },
        children: notes.map((note)=>/*#__PURE__*/ jsx_runtime_.jsx("span", {
                style: {
                    visibility: !iscorrect && note.active ? "visible" : "hidden",
                    cursor: "pointer",
                    color: row === currentCell?.row && col === currentCell?.col ? configuration?.firstColor : configuration.thirdColor
                },
                children: note.value
            }, note.value))
    });
}

;// CONCATENATED MODULE: ./src/components/Cell/EmptyCell.tsx






function EmptyCell(props) {
    const { style, row, col, isValid, value, setStyle, setIsValid } = props;
    const configuration = (0,useGetConfiguration/* default */.Z)();
    const { emptySudoku, sudokuSolved } = (0,lib.useSelector)((state)=>state.sudoku);
    const dispatch = (0,lib.useDispatch)();
    const regrex = /^[0-9]$/; // Only numbers from 0 to 9, 1 digit
    const [haveError, setHaveError] = (0,react_.useState)(false);
    // Function to check if the value can be setted
    const handleChange = (e)=>{
        const { value: valueInput } = e.target;
        const lastValue = valueInput[valueInput.length - 1];
        const canBe = regrex.test(lastValue);
        if (!canBe) return;
        dispatch((0,sudokuSlice/* setCell */.Jx)({
            row,
            col,
            value: Number(lastValue)
        }));
    };
    // Function to detect cliked
    const handleClick = ()=>{
        dispatch((0,sudokuSlice/* setCurrentCell */.gZ)({
            row,
            col
        }));
    };
    // Add error only one time
    (0,react_.useEffect)(()=>{
        if (!haveError) return;
        dispatch((0,sudokuSlice/* addError */.iT)());
    }, [
        haveError,
        dispatch
    ]);
    // Check each time the value changes
    (0,react_.useEffect)(()=>{
        const correctValue = sudokuSolved[row][col];
        if (emptySudoku[row][col] === null) return;
        dispatch((0,sudokuSlice/* setCell */.Jx)({
            row,
            col,
            value: emptySudoku[row][col]
        }));
        if (emptySudoku[row][col] === correctValue) return;
        setHaveError(true);
        setStyle((prev)=>({
                ...prev,
                background: configuration?.dangerColor
            }));
        return;
    }, [
        row,
        col,
        sudokuSolved,
        configuration?.dangerColor,
        dispatch,
        emptySudoku,
        setStyle
    ]);
    // Check each time the sudokuSolved changes
    (0,react_.useEffect)(()=>{
        setIsValid(sudokuSolved[row][col] === emptySudoku[row][col]);
    }, [
        sudokuSolved,
        emptySudoku,
        row,
        col,
        setIsValid
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(NotesCell, {
                style: {
                    ...style,
                    pointerEvents: "none",
                    borderColor: configuration?.thirdColor,
                    color: style?.color || configuration.thirdColor,
                    background: isValid || value === null ? style?.background : configuration.dangerColor
                },
                row: row,
                col: col
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                type: "text",
                className: "w-10 h-10 flex justify-center items-center text-2xl text-center focus:outline-none md:w-14 md:h-14",
                style: {
                    caretColor: "transparent",
                    background: "transparent",
                    zIndex: 1,
                    cursor: "pointer"
                },
                onChange: handleChange,
                value: emptySudoku[row][col] || "",
                onClick: handleClick,
                // No see keyboard in cellphone
                readOnly: true
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/Cell/index.tsx






function Cell(props) {
    const { value, style: styleProps, row, col } = props;
    const { currentCell, emptySudoku } = (0,lib.useSelector)((state)=>state.sudoku);
    const [isValid, setIsValid] = (0,react_.useState)(false);
    const dispatch = (0,lib.useDispatch)();
    const [style, setStyle] = (0,react_.useState)(styleProps);
    const configuration = (0,useGetConfiguration/* default */.Z)();
    // Function to detect cliked
    const handleClick = ()=>{
        dispatch((0,sudokuSlice/* setCurrentCell */.gZ)({
            row,
            col
        }));
    };
    // Check each time the currentCell changes, to set the background
    (0,react_.useEffect)(()=>{
        const rowStart = Math.floor(Number(row) / 3) * 3;
        const colStart = Math.floor(Number(col) / 3) * 3;
        const rows = [
            rowStart,
            rowStart + 1,
            rowStart + 2
        ];
        const cols = [
            colStart,
            colStart + 1,
            colStart + 2
        ];
        const isRow = rows.includes(currentCell?.row);
        const isCol = cols.includes(currentCell?.col);
        const selected = emptySudoku[currentCell?.row][currentCell?.col];
        setStyle((prev)=>({
                ...prev,
                color: configuration?.thirdColor
            }));
        if (currentCell?.row !== row && currentCell?.col !== col) {
            setStyle((prev)=>({
                    ...prev,
                    background: configuration?.firstColor
                }));
        }
        if (currentCell?.row === row || currentCell?.col === col) {
            setStyle((prev)=>({
                    ...prev,
                    background: configuration?.lightComplementaryColor
                }));
        }
        if (isRow && isCol) {
            setStyle((prev)=>({
                    ...prev,
                    background: configuration?.lightComplementaryColor
                }));
        }
        if (selected !== null && selected === emptySudoku[row][col]) {
            setStyle((prev)=>({
                    ...prev,
                    background: configuration?.complementaryColor,
                    color: configuration?.firstColor
                }));
        }
        if ((currentCell?.row === row || currentCell?.col === col || isRow && isCol) && selected !== null && selected === emptySudoku[row][col]) {
            setStyle((prev)=>({
                    ...prev,
                    background: configuration?.dangerColor
                }));
        }
        if (currentCell?.row === row && currentCell?.col === col) {
            setStyle((prev)=>({
                    ...prev,
                    background: configuration?.complementaryColor
                }));
        }
    }, [
        currentCell,
        row,
        col,
        configuration?.firstColor,
        configuration?.lightComplementaryColor,
        configuration?.complementaryColor,
        configuration?.dangerColor,
        configuration?.thirdColor,
        emptySudoku
    ]);
    return isValid && value !== null ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "w-10 border-b-2 border-r-2 h-1w-10 flex justify-center items-center text-2xl md:w-14 md:h-14",
        style: {
            ...style,
            caretColor: "transparent",
            borderColor: configuration?.thirdColor,
            color: style?.color || configuration?.thirdColor
        },
        onClick: handleClick,
        children: emptySudoku[row][col] + ""
    }) : /*#__PURE__*/ jsx_runtime_.jsx(EmptyCell, {
        style: style,
        row: row,
        col: col,
        isValid: isValid,
        value: value,
        setStyle: setStyle,
        setIsValid: setIsValid
    });
}

;// CONCATENATED MODULE: ./src/components/Sudoku/index.tsx





function Sudoku() {
    const { emptySudoku } = (0,lib.useSelector)((state)=>state.sudoku);
    const configuration = (0,useGetConfiguration/* default */.Z)();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: " flex justify-center items-center flex-col",
        children: emptySudoku?.map((row, i)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex",
                children: row.map((col, j)=>{
                    let style = {
                        color: configuration?.thirdColor,
                        backgroundColor: configuration?.firstColor,
                        cursor: "pointer",
                        borderColor: configuration?.thirdColor
                    };
                    if (i === 0) style = {
                        ...style,
                        borderTopWidth: 4
                    };
                    if (j === 0) style = {
                        ...style,
                        borderLeftWidth: 4
                    };
                    if (i == 8) style = {
                        ...style,
                        borderBottomWidth: 4
                    };
                    if (j == 8) style = {
                        ...style,
                        borderRightWidth: 4
                    };
                    if (i % 3 === 0 && !style.borderTopWidth) style = {
                        ...style,
                        borderTopWidth: 3
                    };
                    if ((i + 1) % 3 === 0 && !style.borderBottomWidth) style = {
                        ...style,
                        borderBottomWidth: 3
                    };
                    if (j % 3 === 0 && !style.borderLeftWidth) style = {
                        ...style,
                        borderLeftWidth: 3
                    };
                    if ((j + 1) % 3 === 0 && !style.borderRightWidth) style = {
                        ...style,
                        borderRightWidth: 3
                    };
                    return /*#__PURE__*/ jsx_runtime_.jsx(Cell, {
                        value: col,
                        style: style,
                        row: i,
                        col: j
                    }, j);
                })
            }, i))
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/react-icons@4.11.0_react@18.2.0/node_modules/react-icons/io5/index.esm.js
var index_esm = __webpack_require__(1038);
;// CONCATENATED MODULE: ./src/components/Configuration/index.tsx




function Configuration() {
    const configuration = (0,useGetConfiguration/* default */.Z)();
    const handleConfiguration = ()=>{
        console.log("handleConfiguration");
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
            className: "p-2 rounded-full flex justify-center items-center hover:animate-bounce",
            style: {
                background: configuration?.secondColor,
                color: configuration?.thirdColor
            },
            onClick: handleConfiguration,
            children: /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* IoSettingsOutline */.Fuo, {})
        })
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/react-icons@4.11.0_react@18.2.0/node_modules/react-icons/bs/index.esm.js
var bs_index_esm = __webpack_require__(8541);
// EXTERNAL MODULE: ./src/enum/Theme.ts
var Theme = __webpack_require__(4875);
// EXTERNAL MODULE: ./src/features/configuration/configurationSlice.ts
var configurationSlice = __webpack_require__(4912);
// EXTERNAL MODULE: ./node_modules/.pnpm/cookies-next@2.1.2/node_modules/cookies-next/lib/index.js
var cookies_next_lib = __webpack_require__(8002);
;// CONCATENATED MODULE: ./src/components/ChangeTheme/index.tsx







function ChangeTheme() {
    const configuration = (0,useGetConfiguration/* default */.Z)();
    const dispatch = (0,lib.useDispatch)();
    const handleClick = ()=>{
        const currentTheme = configuration?.theme;
        const nextTheme = currentTheme === Theme/* default */.Z?.LIGHT ? Theme/* default */.Z?.DARK : Theme/* default */.Z?.LIGHT;
        (0,cookies_next_lib.setCookie)("theme", nextTheme);
        dispatch((0,configurationSlice/* setTheme */.Dc)(nextTheme));
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        className: "p-2 rounded-full flex justify-center items-center hover:animate-bounce",
        style: {
            background: configuration?.secondColor,
            color: configuration?.thirdColor
        },
        onClick: handleClick,
        children: configuration?.theme === Theme/* default */.Z?.LIGHT ? /*#__PURE__*/ jsx_runtime_.jsx(bs_index_esm/* BsMoon */.s1t, {}) : /*#__PURE__*/ jsx_runtime_.jsx(bs_index_esm/* BsSun */.eSY, {})
    });
}

;// CONCATENATED MODULE: ./src/components/Topbar/index.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



function TopBar() {
    const configuration = (0,useGetConfiguration/* default */.Z)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `sticky top-0 left-0 flex justify-between px-8 py-4 shadow-md z-40`,
        style: {
            background: configuration?.firstColor
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: `font-bold cursor-pointer`,
                style: {
                    color: configuration?.complementaryColor,
                    fontSize: configuration?.fontSize * 1.5
                },
                children: "Sudoku"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "icons flex gap-4",
                style: {
                    fontSize: configuration?.fontSize * 1.2
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(ChangeTheme, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(Configuration, {})
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/utils/sudoku/createSudoku.ts
function checkValidCeLL(sudoku, row, col, num) {
    // Check row and col
    for(let i = 0; i < 9; i++){
        if (sudoku[row][i] === num || sudoku[i][col] === num) return false;
    }
    // Check box
    const rowStart = Math.floor(row / 3) * 3;
    const colStart = Math.floor(col / 3) * 3;
    for(let i = rowStart; i < rowStart + 3; i++){
        for(let j = colStart; j < colStart + 3; j++){
            if (sudoku[i][j] === num) return false;
        }
    }
    return true;
}
function createEmptySudoku() {
    const sudoku = [];
    for(let i = 0; i < 9; i++){
        sudoku.push([]);
        for(let j = 0; j < 9; j++){
            sudoku[i].push(null);
        }
    }
    return sudoku;
}
function createSudoku(level) {
    const emptySudoku = createEmptySudoku();
    while(level > 0){
        const row = Math.floor(Math.random() * 9);
        const col = Math.floor(Math.random() * 9);
        const num = Math.floor(Math.random() * 9) + 1;
        if (emptySudoku[row][col] === null && checkValidCeLL(emptySudoku, row, col, num)) {
            emptySudoku[row][col] = num;
            level -= 1;
        }
    }
    return emptySudoku;
}

;// CONCATENATED MODULE: ./src/utils/sudoku/optionsSudoku.ts

function getOptions(sudoku) {
    const options = {};
    for(let i = 0; i < 9; i++){
        for(let j = 0; j < 9; j++){
            if (sudoku[i][j] !== null) continue;
            const key = [
                i,
                j
            ].join(",");
            if (!(key in options)) options[key] = [];
            for(let num = 1; num <= 9; num++){
                if (checkValidCeLL(sudoku, i, j, num)) options[key].push(num);
            }
        }
    }
    return options;
}
function getBestOptions(options) {
    let bestOption = null;
    let bestOptionLength = 10;
    for(const key in options){
        if (options[key].length < bestOptionLength) {
            bestOption = key;
            bestOptionLength = options[key].length;
        }
    }
    return bestOption;
}

;// CONCATENATED MODULE: ./src/utils/sudoku/solveSudoku.ts

function verifySudoku(sudoku) {
    if (!sudoku.some((row)=>row.includes(null))) {
        return true;
    }
    return false;
}
function solveSudoku(sudoku) {
    const options = getOptions(sudoku);
    if (Object.keys(options).length === 0) {
        return sudoku;
    }
    const bestOption = getBestOptions(options);
    if (bestOption === null) {
        return sudoku;
    }
    for (const option of options[bestOption]){
        const [row, col] = bestOption.split(",").map((x)=>parseInt(x));
        sudoku[row][col] = option;
        const result = solveSudoku(sudoku);
        if (verifySudoku(result)) {
            return result;
        }
        sudoku[row][col] = null;
    }
    return sudoku;
}

;// CONCATENATED MODULE: ./src/components/NumberPanel/index.tsx




function NumberPanel() {
    const panel = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
    ];
    const configuration = (0,useGetConfiguration/* default */.Z)();
    const { emptySudoku, currentCell, sudokuSolved, isEditMode } = (0,lib.useSelector)((state)=>state.sudoku);
    const { row, col } = currentCell;
    const dispatch = (0,lib.useDispatch)();
    const handleClick = (number)=>{
        dispatch((0,sudokuSlice/* setCurrentPanel */._V)(number));
        if (isEditMode) return;
        if (emptySudoku[row][col] === sudokuSolved[row][col]) return;
        dispatch((0,sudokuSlice/* setCell */.Jx)({
            row,
            col,
            value: number
        }));
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "grid grid-cols-3 grid-rows-3 gap-4  justify-items-center",
        children: panel.map((number, i)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `px-5 py-3 rounded-md cursor-pointer text-3xl text-center hover:scale-110 justify-self-${i % 3 === 0 ? "end" : i % 3 === 1 ? "center" : "start"} ${i === 0 && "px-6"} text-center`,
                style: {
                    background: configuration?.firstColor,
                    color: configuration?.complementaryColor,
                    border: `2px solid ${configuration?.thirdColor}`
                },
                onClick: ()=>handleClick(number),
                children: number
            }, number);
        })
    });
}

// EXTERNAL MODULE: ./src/features/popUps/poUpsSlice.ts
var poUpsSlice = __webpack_require__(5200);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-icons@4.11.0_react@18.2.0/node_modules/react-icons/ai/index.esm.js
var ai_index_esm = __webpack_require__(2765);
;// CONCATENATED MODULE: ./src/components/Erros/index.tsx






function Errors() {
    const { errors } = (0,lib.useSelector)((state)=>state.sudoku);
    const configuration = (0,useGetConfiguration/* default */.Z)();
    const dispatch = (0,lib.useDispatch)();
    // Force user to start a new game
    (0,react_.useEffect)(()=>{
        if (errors <= 3) return;
        dispatch((0,poUpsSlice/* cannotSeeCloseButtonNewGame */.Id)());
        dispatch((0,poUpsSlice/* openShowCreateNewGame */._C)());
    }, [
        errors,
        dispatch
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col justify-center items-center",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "rounded-full p-2 relative cursor-pointer",
                style: {
                    background: configuration.secondColor
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(ai_index_esm/* AiOutlineCloseCircle */.SV5, {
                        className: "text-2xl",
                        style: {
                            color: configuration.thirdColor
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "absolute right-[-20%] top-[-30%] rounded-full w-6 h-6 flex justify-center items-center",
                        style: {
                            background: errors > 0 ? configuration.dangerColor : configuration.secondColor
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "",
                            style: {
                                color: configuration.thirdColor
                            },
                            children: errors
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                children: "Errors"
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/react-icons@4.11.0_react@18.2.0/node_modules/react-icons/bi/index.esm.js
var bi_index_esm = __webpack_require__(9758);
;// CONCATENATED MODULE: ./src/components/ButtonNotes/index.tsx





function ButtonNotes() {
    const { isEditMode } = (0,lib.useSelector)((state)=>state.sudoku);
    const configuration = (0,useGetConfiguration/* default */.Z)();
    const dispatch = (0,lib.useDispatch)();
    const handleClick = ()=>{
        dispatch((0,sudokuSlice/* toggleEditMode */.lg)());
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col justify-center items-center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "rounded-full p-2 relative cursor-pointer",
                style: {
                    background: isEditMode ? configuration?.complementaryColor : configuration.secondColor
                },
                onClick: handleClick,
                children: /*#__PURE__*/ jsx_runtime_.jsx(bi_index_esm/* BiEdit */.Hlf, {
                    className: "text-2xl",
                    style: {
                        color: isEditMode ? configuration?.firstColor : configuration.thirdColor
                    }
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                children: "Notes"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/clearCell/index.tsx





function ClearCell() {
    const configuration = (0,useGetConfiguration/* default */.Z)();
    const { emptySudoku, sudokuSolved, currentCell } = (0,lib.useSelector)((state)=>state.sudoku);
    const dispatch = (0,lib.useDispatch)();
    const handleDelete = ()=>{
        const { row, col } = currentCell;
        dispatch((0,sudokuSlice/* toggleDeleteButton */._)());
        if (emptySudoku[row][col] === null || emptySudoku[row][col] === sudokuSolved[row][col]) return;
        dispatch((0,sudokuSlice/* setCell */.Jx)({
            row,
            col,
            value: null
        }));
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col justify-center items-center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "rounded-full p-2 relative cursor-pointer",
                style: {
                    background: configuration.secondColor
                },
                onClick: handleDelete,
                children: /*#__PURE__*/ jsx_runtime_.jsx(bs_index_esm/* BsTrash */.yvY, {
                    className: "text-2xl",
                    style: {
                        color: configuration.thirdColor
                    }
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                children: "Delete"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/PopUp/index.tsx



function PopUp(props) {
    const { show } = props;
    const configuration = (0,useGetConfiguration/* default */.Z)();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "absolute top-0 left-0 w-full h-full  z-50  justify-center items-center",
        style: {
            background: configuration.firstColor + "90",
            display: show ? "flex" : "none"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "content p-16 flex flex-col justify-center items-center rounded-xl",
            style: {
                background: configuration?.firstColor,
                color: configuration?.thirdColor
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: "text-2xl",
                    children: "Your sudoku is being created"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "text-xl",
                    children: "Please wait a moment while we create your new game."
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(bi_index_esm/* BiLoaderAlt */.sOR, {
                    className: "animate-spin text-6xl"
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/components/ClueButton/index.tsx





function ClueButton() {
    const configuration = (0,useGetConfiguration/* default */.Z)();
    const { clues, currentCell, sudokuSolved, emptySudoku } = (0,lib.useSelector)((root)=>root.sudoku);
    const dispatch = (0,lib.useDispatch)();
    // When clicked, the current cell will be filled with the correct value
    const handleClick = ()=>{
        const { row, col } = currentCell;
        const emptyCell = emptySudoku[row][col];
        const solvedCell = sudokuSolved[row][col];
        if (emptyCell === solvedCell) return;
        if (clues === 0) return;
        dispatch((0,sudokuSlice/* setCell */.Jx)({
            row,
            col,
            value: solvedCell
        }));
        dispatch((0,sudokuSlice/* subtractClue */.Hf)());
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col justify-center items-center",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "rounded-full p-2 relative cursor-pointer",
                style: {
                    background: configuration.secondColor
                },
                onClick: handleClick,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(bs_index_esm/* BsLightbulb */.sTU, {
                        className: "text-2xl",
                        style: {
                            color: configuration.thirdColor
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "absolute right-[-20%] top-[-30%] rounded-full w-6 h-6 flex justify-center items-center",
                        style: {
                            background: clues === 0 ? configuration.dangerColor : configuration.secondColor
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "",
                            style: {
                                color: configuration.thirdColor
                            },
                            children: clues
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                children: "Notes"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/NewGameButton/index.tsx









function NewGameButton() {
    const configuration = (0,useGetConfiguration/* default */.Z)();
    const dispatch = (0,lib.useDispatch)();
    const { show: showCreateNewGame, showCloseButton } = (0,lib.useSelector)((root)=>root.popUp.createNewGame);
    const help = (level)=>{
        let next = true;
        let cont = 0;
        while(next){
            cont = cont + 1;
            const sudokuSolved = createSudoku(level);
            const emptySudoku = sudokuSolved.map((row)=>[
                    ...row
                ]);
            solveSudoku(sudokuSolved);
            if (verifySudoku(sudokuSolved)) {
                dispatch((0,sudokuSlice/* setSudokuSolved */.HO)(sudokuSolved));
                dispatch((0,sudokuSlice/* setEmptySudoku */.Sg)(emptySudoku));
                next = false;
                dispatch((0,poUpsSlice/* closeShowCreateSudoku */.Kw)());
            }
        }
    };
    const handleCreateNewGame = (level)=>{
        dispatch((0,poUpsSlice/* openShowCreateSudoku */.m5)());
        dispatch((0,poUpsSlice/* closeShowCreateNewGame */.KM)());
        dispatch((0,sudokuSlice/* setCreateNewSudoku */.QA)());
        setTimeout(()=>{
            help(level);
        }, 100);
    };
    const openCreateNewGame = ()=>{
        dispatch((0,poUpsSlice/* canSeeCloseButtonNewGame */.yI)());
        dispatch((0,poUpsSlice/* openShowCreateNewGame */._C)());
    };
    const closeCreateNewGame = ()=>{
        dispatch((0,poUpsSlice/* closeShowCreateNewGame */.KM)());
    };
    const levels = [
        {
            name: "EASY",
            level: enum_Level.EASY
        },
        {
            name: "MEDIUM",
            level: enum_Level.MEDIUM
        },
        {
            name: "HARD",
            level: enum_Level.HARD
        },
        {
            name: "EXTREME",
            level: enum_Level.EXTREME
        },
        {
            name: "INSANE",
            level: enum_Level.INSANE
        }
    ];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            showCreateNewGame && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "absolute top-0 left-0 w-full h-full  z-50 flex justify-center items-center",
                style: {
                    background: configuration.firstColor + "90"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "bg-white px-5 py-3",
                    style: {
                        background: configuration?.firstColor,
                        color: configuration?.thirdColor
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "head flex justify-between items-center gap-3 mb-3",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    className: "text-2xl",
                                    children: "Create New Game"
                                }),
                                showCloseButton && /*#__PURE__*/ jsx_runtime_.jsx(ai_index_esm/* AiOutlineClose */.oHP, {
                                    className: "text-2xl cursor-pointer",
                                    onClick: closeCreateNewGame,
                                    style: {
                                        color: configuration.dangerColor
                                    }
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "body",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-lg mb-3",
                                    children: "Select A Level:"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "levels flex flex-col gap-3",
                                    children: levels.map((level)=>/*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            className: "px-3 py-1 shadow text-lg rounded-md hover:scale-105 transition-all duration-200",
                                            style: {
                                                background: configuration?.complementaryColor,
                                                color: configuration?.firstColor
                                            },
                                            onClick: ()=>handleCreateNewGame(level.level),
                                            children: level.name
                                        }, level.level))
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: "px-5 py-3 shadow text-lg rounded-md hover:scale-105 transition-all duration-200",
                style: {
                    background: configuration?.complementaryColor,
                    color: configuration?.firstColor
                },
                onClick: openCreateNewGame,
                children: "New Game"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/app/page.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 
















function Home() {
    const dispatch = (0,lib.useDispatch)();
    const { showCreateSudoku } = (0,lib.useSelector)((root)=>root.popUp);
    (0,react_.useEffect)(()=>{
        let next = true;
        let cont = 0;
        while(next){
            cont = cont + 1;
            const sudokuSolved = createSudoku(enum_Level.EASY);
            const emptySudoku = sudokuSolved.map((row)=>[
                    ...row
                ]);
            solveSudoku(sudokuSolved);
            if (verifySudoku(sudokuSolved)) {
                dispatch((0,sudokuSlice/* setSudokuSolved */.HO)(sudokuSolved));
                dispatch((0,sudokuSlice/* setEmptySudoku */.Sg)(emptySudoku));
                next = false;
                dispatch((0,poUpsSlice/* closeShowCreateSudoku */.Kw)());
            }
        }
    }, [
        dispatch
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(PopUp, {
                show: showCreateSudoku
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(TopBar, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                className: "flex flex-col justify-center gap-8 px-8 py-4 md:flex-row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Sudoku, {}),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex justify-between  flex-col gap-3",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "actions flex justify-center items-center gap-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Errors, {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx(ButtonNotes, {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx(ClearCell, {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx(ClueButton, {})
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(NumberPanel, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(NewGameButton, {})
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 4875:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   f: () => (/* binding */ getValidTheme)
/* harmony export */ });
var Theme;
(function(Theme) {
    Theme["LIGHT"] = "light";
    Theme["DARK"] = "dark";
    Theme["PERSONAL"] = "personal";
})(Theme || (Theme = {}));
function getValidTheme(key) {
    if (key && Object.values(Theme).includes(key)) {
        return key;
    }
    return Theme.LIGHT;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Theme);


/***/ }),

/***/ 4912:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dc: () => (/* binding */ setTheme),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export configurationSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7118);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _enum_Theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4875);
/* __next_internal_client_entry_do_not_use__ configurationSlice,default auto */ 

const darkMode = {
    fontSize: 16,
    firstColor: "#212121",
    secondColor: "#C0C0C0",
    thirdColor: "#F1F1F1",
    complementaryColor: "#B0FFFF",
    lightComplementaryColor: "#00CCCC",
    infoColor: "#CCCCCC",
    dangerColor: "#FF6969",
    successColor: "#46E346",
    warningColor: "#CCBE00"
};
const lightMode = {
    fontSize: 16,
    firstColor: "#F1F1F1",
    secondColor: "#C0C0C0",
    thirdColor: "#212121",
    complementaryColor: "#00CCCC",
    lightComplementaryColor: "#B0FFFF",
    infoColor: "#CCCCCC",
    dangerColor: "#FF6969",
    successColor: "#46E346",
    warningColor: "#FFEE00"
};
const initialState = {
    theme: _enum_Theme__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z?.LIGHT,
    ...lightMode
};
const configurationSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({
    name: "configuration",
    initialState,
    reducers: {
        setTheme: (state, action)=>{
            state.theme = action.payload;
            const newTheme = action.payload === _enum_Theme__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z?.LIGHT ? lightMode : darkMode;
            let key;
            for(key in newTheme){
                if (state.hasOwnProperty(key) && newTheme.hasOwnProperty(key)) {
                    state[key] = newTheme[key];
                }
            }
        }
    }
});
const { setTheme } = configurationSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (configurationSlice.reducer);


/***/ }),

/***/ 5200:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Id: () => (/* binding */ cannotSeeCloseButtonNewGame),
/* harmony export */   KM: () => (/* binding */ closeShowCreateNewGame),
/* harmony export */   Kw: () => (/* binding */ closeShowCreateSudoku),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   _C: () => (/* binding */ openShowCreateNewGame),
/* harmony export */   m5: () => (/* binding */ openShowCreateSudoku),
/* harmony export */   yI: () => (/* binding */ canSeeCloseButtonNewGame)
/* harmony export */ });
/* unused harmony export popUpsSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7118);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    showCreateSudoku: true,
    createNewGame: {
        show: false,
        showCloseButton: false
    }
};
const popUpsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "popUp",
    initialState,
    reducers: {
        closeShowCreateSudoku: (state)=>{
            state.showCreateSudoku = false;
        },
        openShowCreateSudoku: (state)=>{
            state.showCreateSudoku = true;
        },
        closeShowCreateNewGame: (state)=>{
            state.createNewGame.show = false;
        },
        openShowCreateNewGame: (state)=>{
            state.createNewGame.show = true;
        },
        canSeeCloseButtonNewGame: (state)=>{
            state.createNewGame.showCloseButton = true;
        },
        cannotSeeCloseButtonNewGame: (state)=>{
            state.createNewGame.showCloseButton = false;
        }
    }
});
const { closeShowCreateSudoku, openShowCreateSudoku, closeShowCreateNewGame, openShowCreateNewGame, canSeeCloseButtonNewGame, cannotSeeCloseButtonNewGame } = popUpsSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popUpsSlice.reducer);


/***/ }),

/***/ 3040:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HO: () => (/* binding */ setSudokuSolved),
/* harmony export */   Hf: () => (/* binding */ subtractClue),
/* harmony export */   Jx: () => (/* binding */ setCell),
/* harmony export */   QA: () => (/* binding */ setCreateNewSudoku),
/* harmony export */   Sg: () => (/* binding */ setEmptySudoku),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   _: () => (/* binding */ toggleDeleteButton),
/* harmony export */   _V: () => (/* binding */ setCurrentPanel),
/* harmony export */   gZ: () => (/* binding */ setCurrentCell),
/* harmony export */   iT: () => (/* binding */ addError),
/* harmony export */   lg: () => (/* binding */ toggleEditMode)
/* harmony export */ });
/* unused harmony export sudokuSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7118);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    sudokuSolved: [],
    emptySudoku: [],
    currentCell: {
        row: 0,
        col: 0
    },
    errors: 0,
    isEditMode: false,
    currentPanel: null,
    clcikedDeleteButton: false,
    clues: 3
};
const sudokuSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "sudoku",
    initialState,
    reducers: {
        setCreateNewSudoku: (state)=>{
            state.currentCell.row = 0;
            state.currentCell.col = 0;
            state.errors = 0;
            state.isEditMode = false;
            state.currentPanel = null;
            state.clcikedDeleteButton = false;
            state.clues = 3;
        },
        setSudokuSolved: (state, action)=>{
            state.sudokuSolved = action.payload;
        },
        setEmptySudoku: (state, action)=>{
            state.emptySudoku = action.payload;
        },
        setCurrentCell: (state, action)=>{
            state.currentCell = action.payload;
        },
        setCell: (state, action)=>{
            const { row, col, value } = action.payload;
            state.emptySudoku[row][col] = value;
        },
        addError: (state)=>{
            state.errors++;
        },
        toggleEditMode: (state)=>{
            state.isEditMode = !state.isEditMode;
        },
        setCurrentPanel: (state, action)=>{
            state.currentPanel = action.payload;
        },
        toggleDeleteButton: (state)=>{
            state.clcikedDeleteButton = !state.clcikedDeleteButton;
        },
        subtractClue: (state)=>{
            if (state.clues <= 0) return;
            state.clues--;
        }
    }
});
const { setSudokuSolved, setEmptySudoku, setCurrentCell, setCell, addError, toggleEditMode, setCurrentPanel, toggleDeleteButton, subtractClue, setCreateNewSudoku } = sudokuSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sudokuSlice.reducer);


/***/ }),

/***/ 3909:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ useGetConfiguration)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7339);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);

function useGetConfiguration() {
    const configuration = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)((state)=>state.configuration);
    return configuration;
}


/***/ }),

/***/ 272:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4839);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/home/jpcortesg/Escritorio/sudoku/src/app/layout.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 148:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4839);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/home/jpcortesg/Escritorio/sudoku/src/app/page.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 6716:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2987);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"512x512"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "icon.ico")

    return [{
      ...imageData,
      url: imageUrl + "?87231caaff29131d",
    }]
  });

/***/ }),

/***/ 5331:
/***/ (() => {



/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [923,90], () => (__webpack_exec__(4807)));
module.exports = __webpack_exports__;

})();