(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{367:function(t,s,e){"use strict";e.r(s);var n=e(6),a=Object(n.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"interrupt-avr"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#interrupt-avr"}},[t._v("#")]),t._v(" Interrupt AVR")]),t._v(" "),e("h2",{attrs:{id:"what-is-interrupt"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#what-is-interrupt"}},[t._v("#")]),t._v(" What is Interrupt ?")]),t._v(" "),e("p",[t._v("Interrupt are the powerful signal that interfere the main process being done inside the system .IT perform events that require immediate attention by the microprocessor.")]),t._v(" "),e("p",[t._v("When an interrupt occurs, the current program execution is stopped, the context is saved and the control jumps to ISR( Interrupt Control Routine ). At the end of ISR, the microcontroller returns to the task it had paused and continue its normal operations.")]),t._v(" "),e("h2",{attrs:{id:"what-is-interrupt-application"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#what-is-interrupt-application"}},[t._v("#")]),t._v(" What is Interrupt application ?")]),t._v(" "),e("ul",[e("li",[t._v("Switching off the device when it get hang.")]),t._v(" "),e("li",[t._v("Performing  time Critical and time specific  task(i.e alarm clock)")]),t._v(" "),e("li",[t._v("Interrupts are used in type ahead feature for buffering events like keystrokes.")]),t._v(" "),e("li",[t._v("Different device generate signal as interrupt  to denote the state of work so the critical task can be performed on time")])]),t._v(" "),e("h2",{attrs:{id:"what-are-type-of-interrupt-and-their-number-present"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#what-are-type-of-interrupt-and-their-number-present"}},[t._v("#")]),t._v(" What are Type of Interrupt and their number present ?")]),t._v(" "),e("p",[t._v("The AVR 8-bits microcontroller provide  two type of interrupt")]),t._v(" "),e("ol",[e("li",[e("p",[e("b",[t._v("Internal  interrupt sources ")]),t._v(": These interrupt signal are generated within microcontrollers by peripheral devices i.e  Timer/Counter, Analog Comparator, Serial, ADC( Analog to Digital Converter),etc. They generally denote the  state of work  being performed by peripheral.")])]),t._v(" "),e("li",[e("p",[e("b",[t._v("External interrupt sources")]),t._v(":\nThese Interrupt are generated as result of user activities such as pressing switch. There are 4 external interrupts.")]),t._v(" "),e("ul",[e("li",[t._v("External interrupt 0 (INT0)")]),t._v(" "),e("li",[t._v("External interrupt 1 (INT1)")]),t._v(" "),e("li",[t._v("External interrupt 2 (INT2)")])])])]),t._v(" "),e("h2",{attrs:{id:"how-does-interrupt-work"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-does-interrupt-work"}},[t._v("#")]),t._v(" How Does Interrupt work ?")]),t._v(" "),e("p",[t._v("Upon the triggering of an interrupt the following sequence is followed by the microcontroller providing that the both the "),e("strong",[t._v("specific interrupt and global interrupts are enabled")]),t._v(" in the microcontroller:")]),t._v(" "),e("ol",[e("li",[t._v("Upon the generation of interrupt signal , microcontroller completes the execution of the current instruction, stores the address of the next instruction (the content of the PC) on the stack.")])]),t._v(" "),e("p",[e("code",[t._v("PC : A program counter is a memory that contains the address (location) of the instruction being executed at the current time. The CPU execute the instruction which address is contain in the PC")])]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[e("p",[t._v("The function of the triggered interrupt signal is then loaded in the PC and the microcontroller starts execution from that point up until is reaches a end instruction.")])]),t._v(" "),e("li",[e("p",[t._v("Upon the end of  execution of function ,  the address that was stored on the stack in "),e("strong",[t._v("step 1")]),t._v(" is reloaded in the PC")])]),t._v(" "),e("li",[e("p",[t._v("The microcontroller then start executing instructions from that point. That is the point that it left off when the interrupt was triggered.")])])]),t._v(" "),e("h2",{attrs:{id:"step-to-use-interrupt-for-only-external-interrupt"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-to-use-interrupt-for-only-external-interrupt"}},[t._v("#")]),t._v(" Step to use Interrupt (for only external interrupt) ?")]),t._v(" "),e("ol",[e("li",[e("b",[t._v("Include necessary header file ")]),t._v(" : Header file necessary for the interrupt is :")])]),t._v(" "),e("div",{staticClass:"language-c line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[e("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("<avr/interrupt.h>")])]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("ol",{attrs:{start:"2"}},[e("li",[e("b",[t._v("Enable the global interrupt")]),t._v(": Enabling global interrupt can be done by the below code")])]),t._v(" "),e("div",{staticClass:"language-c line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sei")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//enable global interrupt")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("ol",{attrs:{start:"3"}},[e("li",[e("b",[t._v("Enable Specific Interrupt")]),t._v(" : It can done by setting bits on the GICR register (General Interrupt Control Register)")])]),t._v(" "),e("div",{staticClass:"language-c line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[t._v("GICR "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v("INT0"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//enable int0")]),t._v("\nGICR "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v("INT1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//enable int1")]),t._v("\nGICR "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v("INT2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//enable int2")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("ol",{attrs:{start:"4"}},[e("li",[e("b",[t._v("Specify the nature of the signal for interrupt generation (i.e rising edge , falling edge)")]),t._v(":\nIt is done by setting "),e("code",[t._v("ISC11")]),t._v(", "),e("code",[t._v("ISC10")]),t._v(" in "),e("strong",[t._v("MCUCR (MCU Control Register)")]),t._v(" for "),e("code",[t._v("INT1")]),t._v(" ,   "),e("code",[t._v("ISC00")]),t._v(", "),e("code",[t._v("ISC01")]),t._v(" in "),e("strong",[t._v("MCUCR (MCU Control Register)")]),t._v(" for "),e("code",[t._v("INT0")]),t._v(" and "),e("code",[t._v("ISC2")]),t._v("in "),e("strong",[t._v("MCUCSR (MCU Control and Status Register)")]),t._v("  for "),e("code",[t._v("INT2")])])]),t._v(" "),e("div",{staticClass:"language-c line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[t._v("MCUCR "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v("ISC01 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v("ISC00"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//rising edge for INT0")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("ol",{attrs:{start:"5"}},[e("li",[e("p",[e("b",[t._v(" Make the interrupt pin as Input ")])])]),t._v(" "),e("li",[e("p",[e("b",[t._v("Define Function for Interrupt")])])])]),t._v(" "),e("div",{staticClass:"language-c line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ISR")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("INTn_vect"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// work to be performed")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])]),e("h2",{attrs:{id:"demo-program"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#demo-program"}},[t._v("#")]),t._v(" Demo Program")]),t._v(" "),e("p",[t._v("WAP to blink led when switch is pressed , it must be interrupt signal to Controller .")]),t._v(" "),e("div",{staticClass:"language-c line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[e("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("<inttypes.h>")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("<avr/io.h>")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("<avr/interrupt.h>")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("<avr/sleep.h>")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("<util/delay.h>")])]),t._v("\n\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ISR")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("INT0_vect"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//turning on led only when switch is turned on")]),t._v("\n    PORTC "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v("PC0"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("_delay_ms")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    PORTC "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v("PC0"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("_delay_ms")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   \n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n   DDRD "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v("PD2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//setting PD2 as input")]),t._v("\n   PORTD "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" PD2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// pull up resistor")]),t._v("\n   DDRC "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0xFF")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//setting DDRC as output")]),t._v("\n    \n    GICR "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v("INT0"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//enable int0")]),t._v("\n    MCUCR "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v("ISC01 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v("ISC00"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//rising edge")]),t._v("\n    \n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sei")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//enable global interrupt")]),t._v("\n  \n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n      \n   "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br"),e("span",{staticClass:"line-number"},[t._v("18")]),e("br"),e("span",{staticClass:"line-number"},[t._v("19")]),e("br"),e("span",{staticClass:"line-number"},[t._v("20")]),e("br"),e("span",{staticClass:"line-number"},[t._v("21")]),e("br"),e("span",{staticClass:"line-number"},[t._v("22")]),e("br"),e("span",{staticClass:"line-number"},[t._v("23")]),e("br"),e("span",{staticClass:"line-number"},[t._v("24")]),e("br"),e("span",{staticClass:"line-number"},[t._v("25")]),e("br"),e("span",{staticClass:"line-number"},[t._v("26")]),e("br"),e("span",{staticClass:"line-number"},[t._v("27")]),e("br"),e("span",{staticClass:"line-number"},[t._v("28")]),e("br"),e("span",{staticClass:"line-number"},[t._v("29")]),e("br"),e("span",{staticClass:"line-number"},[t._v("30")]),e("br"),e("span",{staticClass:"line-number"},[t._v("31")]),e("br"),e("span",{staticClass:"line-number"},[t._v("32")]),e("br"),e("span",{staticClass:"line-number"},[t._v("33")]),e("br")])]),e("h2",{attrs:{id:"practise-question"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#practise-question"}},[t._v("#")]),t._v(" Practise Question")]),t._v(" "),e("ul",[e("li",[t._v("make use of interrupt 1?")])])])}),[],!1,null,null,null);s.default=a.exports}}]);