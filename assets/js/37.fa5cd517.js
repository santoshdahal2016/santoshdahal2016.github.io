(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{382:function(t,s,a){"use strict";a.r(s);var n=a(6),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"understanding-numpy-for-computer-vision"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#understanding-numpy-for-computer-vision"}},[t._v("#")]),t._v(" Understanding Numpy for Computer Vision")]),t._v(" "),a("h2",{attrs:{id:"what-is-numpy-routine-for-computing-complex-array"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-numpy-routine-for-computing-complex-array"}},[t._v("#")]),t._v(" What is Numpy "),a("code",[t._v("Routine for computing complex array")]),t._v("?")]),t._v(" "),a("p",[t._v("NumPy (Numerical Python) is a library for the Python programming language, adding support for large, multi-dimensional arrays and matrices, along with a large collection of high-level mathematical functions to operate on these arrays.")]),t._v(" "),a("p",[t._v("Numpy provides the powerful data structure known as n-d array and function to manipulate that n-d array .This data structure is used by other library to represent complex data such as images .")]),t._v(" "),a("h2",{attrs:{id:"creating-array"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-array"}},[t._v("#")]),t._v(" Creating Array")]),t._v(" "),a("h3",{attrs:{id:"_1-d-array"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-d-array"}},[t._v("#")]),t._v(" 1-d Array")]),t._v(" "),a("div",{staticClass:"language-py line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" numpy "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" np\n\na "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" np"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Create a rank 1 array")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Prints \"<class 'numpy.ndarray'>\"")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shape"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# Prints "(3,)"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# Prints "1 2 3"')]),t._v("\na"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Change an element of the array")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# Prints "[5, 2, 3]"')]),t._v("\n\n\nx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" np"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dtype"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("np"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("int64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Force a particular datatype")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dtype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                         "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# Prints "int64"')]),t._v("\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br")])]),a("h3",{attrs:{id:"n-d-array"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#n-d-array"}},[t._v("#")]),t._v(" n-d array")]),t._v(" "),a("div",{staticClass:"language-py line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[t._v("b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" np"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Create a rank 2 array")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shape"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# Prints "(2, 3)"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# Prints "1 2 4"')]),t._v("\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h3",{attrs:{id:"predefined-function"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#predefined-function"}},[t._v("#")]),t._v(" Predefined Function")]),t._v(" "),a("div",{staticClass:"language-py line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" np"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("zeros"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Create an array of all zeros")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("              "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# Prints "[[ 0.  0.]')]),t._v("\n       \nb "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" np"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ones"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Create an array of all ones")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("              "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# Prints "[[ 1.  1.]]"')]),t._v("\n\nc "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" np"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("full"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Create a constant array")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("               "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# Prints "[[ 7.  7.]')]),t._v("\n                       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#          [ 7.  7.]]"')]),t._v("\n\nd "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" np"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("eye"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Create a 2x2 identity matrix")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("              "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# Prints "[[ 1.  0.]')]),t._v("\n                      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#          [ 0.  1.]]"')]),t._v("\n\ne "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" np"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("random"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("random"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Create an array filled with random values")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# Might print "[[ 0.91940167  0.08143941]')]),t._v("\n                             "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#               [ 0.68744134  0.87236687]]"')]),t._v("\n\nx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" np"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("arrange"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# [0 1 2 3 4 5]")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br")])]),a("h2",{attrs:{id:"accessing-array"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#accessing-array"}},[t._v("#")]),t._v(" Accessing  Array")]),t._v(" "),a("p",[a("strong",[t._v("Slicing")]),t._v(" : Similar to Python lists, numpy arrays can be sliced. Since arrays may be multidimensional, you must specify a slice for each dimension of the array")]),t._v(" "),a("div",{staticClass:"language-py line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" numpy "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" np\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Create the following rank 2 array with shape (3, 4)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# [[ 1  2  3  4]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  [ 5  6  7  8]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  [ 9 10 11 12]]")]),t._v("\na "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" np"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Use slicing to pull out the subarray consisting of the first 2 rows")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# and columns 1 and 2; b is the following array of shape (2, 2):")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# [[2 3]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  [6 7]]")]),t._v("\nb "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# A slice of an array is a view into the same data, so modifying it")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# will modify the original array.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# Prints "2"')]),t._v("\nb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("77")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# b[0, 0] is the same piece of data as a[0, 1]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# Prints "77"')]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br")])]),a("h2",{attrs:{id:"manipulation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manipulation"}},[t._v("#")]),t._v(" Manipulation")]),t._v(" "),a("h3",{attrs:{id:"dimensional"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dimensional"}},[t._v("#")]),t._v(" Dimensional")]),t._v(" "),a("ol",[a("li",[a("b",[t._v("reshape")])]),t._v(" "),a("li",[a("b",[t._v("ravel")])]),t._v(" "),a("li",[a("b",[t._v("flatten")])])]),t._v(" "),a("h3",{attrs:{id:"joining"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#joining"}},[t._v("#")]),t._v(" Joining")]),t._v(" "),a("ol",[a("li",[a("b",[t._v("stack")])]),t._v(" "),a("li",[a("b",[t._v("dstack")]),t._v(" : depth stack")]),t._v(" "),a("li",[a("b",[t._v("hstack")]),t._v(" : horizontal stack on left side")]),t._v(" "),a("li",[a("b",[t._v("vstack")]),t._v(" : vertical stack on top of each other")])]),t._v(" "),a("h3",{attrs:{id:"spliting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spliting"}},[t._v("#")]),t._v(" Spliting")]),t._v(" "),a("ol",[a("li",[a("b",[t._v("split")])])]),t._v(" "),a("h3",{attrs:{id:"transforming"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transforming"}},[t._v("#")]),t._v(" Transforming")]),t._v(" "),a("ol",[a("li",[a("b",[t._v("flip")])]),t._v(" "),a("li",[a("b",[t._v("fliplr")]),t._v(" : Plain flip with axis with -1")]),t._v(" "),a("li",[a("b",[t._v("flipud")]),t._v(" : Plain flip with axis with 0")]),t._v(" "),a("li",[a("b",[t._v("role")]),t._v(" : It perform shifting operation")]),t._v(" "),a("li",[a("b",[t._v("rot90")]),t._v(" : rotate anticlok wise in 90 degree")])]),t._v(" "),a("h3",{attrs:{id:"bitwise"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bitwise"}},[t._v("#")]),t._v(" Bitwise")]),t._v(" "),a("ol",[a("li",[a("b",[t._v("bitwise_and")])]),t._v(" "),a("li",[a("b",[t._v("bitwise_or")])]),t._v(" "),a("li",[a("b",[t._v("bitwise_xor")])]),t._v(" "),a("li",[a("b",[t._v("bitwise_not")])])]),t._v(" "),a("h3",{attrs:{id:"statistical"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#statistical"}},[t._v("#")]),t._v(" Statistical")]),t._v(" "),a("ol",[a("li",[a("b",[t._v("median")])]),t._v(" "),a("li",[a("b",[t._v("average")])]),t._v(" "),a("li",[a("b",[t._v("std")])]),t._v(" "),a("li",[a("b",[t._v("var")])]),t._v(" "),a("li",[a("b",[t._v("histogram")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);