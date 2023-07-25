/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function() {

eval("let proxy;\nif (true) {\n  proxy = 'https://localhost:5002';\n} else {}\n\n//\n\nconst messages = [];\nconst chatFetch = async messages => {\n  try {\n    const res = await fetch(`${proxy}/chat`, {\n      body: JSON.stringify(messages)\n    });\n    if (res.ok) {\n      const data = await res.json();\n    } else {\n      throw res;\n    }\n  } catch (err) {\n    console.error(err);\n  }\n};\n\n// const getAiResponse = async (chatBot, chat, chatRequest) =>{\n//     const openai = new OpenAIApi(new Configuration({\n//       apiKey: process.env.CHAT_API_KEY\n//     }));\n//     const from = chatBot.from ? `from ${chatBot.from}` : '';\n//     const prompt = chatBot.prompt ? `${chatBot.prompt}` : '';\n//     const description = chatBot.description ? `${chatBot.description}` : '';\n//     const greeting = chatBot.greeting ? {role:'assistant', content: chatBot.greeting} : {};\n//     let systemPrompt = `You are ${chatBot.name} ${from}.  The user you are speaking with is ${chatRequest.name}. ${rules.join(' ')} ${description}. ${prompt}.`\n//     let messages = [{role:'system', content: systemPrompt}, greeting, ...chat.messages, chatRequest]\n\n//     const res = await openai.createChatCompletion({\n//       model: \"gpt-4\",\n//       // model: \"gpt-3.5-turbo\",\n//       messages: messages,\n//       max_tokens: 150,\n//       temperature: 0.9\n//     });\n//     return res.data.choices[0].message\n//   }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUEsSUFBSUEsS0FBSztBQUNULElBQUdDLElBQXNDLEVBQUM7RUFDdENELEtBQUssR0FBRyx3QkFBd0I7QUFDcEMsQ0FBQyxNQUFJLEVBRUo7O0FBRUQ7O0FBRUEsTUFBTUksUUFBUSxHQUFHLEVBQUU7QUFFbkIsTUFBTUMsU0FBUyxHQUFHLE1BQU1ELFFBQVEsSUFBRztFQUUvQixJQUFHO0lBQ0MsTUFBTUUsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBRSxHQUFFUCxLQUFNLE9BQU0sRUFBQztNQUNwQ1EsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ04sUUFBUTtJQUNqQyxDQUFDLENBQUM7SUFDRixJQUFHRSxHQUFHLENBQUNLLEVBQUUsRUFBQztNQUNOLE1BQU1DLElBQUksR0FBRyxNQUFNTixHQUFHLENBQUNPLElBQUksQ0FBQyxDQUFDO0lBRWpDLENBQUMsTUFBTTtNQUNILE1BQU1QLEdBQUc7SUFDYjtFQUVKLENBQUMsUUFBTVEsR0FBRyxFQUFDO0lBQ1BDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDRixHQUFHLENBQUM7RUFDdEI7QUFFSixDQUFDOztBQUtEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2ludGVydmlld3kvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgcHJveHk7XG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jyl7XG4gICAgcHJveHkgPSAnaHR0cHM6Ly9sb2NhbGhvc3Q6NTAwMidcbn1lbHNle1xuICAgIHByb3h5ID0gJ2h0dHBzOi8vY29ycy1wcm94eS1zZXJ2LWQ1ODg0NTI3ZTUzMi5oZXJva3VhcHAuY29tJ1xufVxuXG4vL1xuXG5jb25zdCBtZXNzYWdlcyA9IFtdO1xuXG5jb25zdCBjaGF0RmV0Y2ggPSBhc3luYyhtZXNzYWdlcyk9PntcblxuICAgIHRyeXtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7cHJveHl9L2NoYXRgLHtcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2VzKVxuICAgICAgICB9KTtcbiAgICAgICAgaWYocmVzLm9rKXtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyByZXM7XG4gICAgICAgIH1cblxuICAgIH1jYXRjaChlcnIpe1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG4gICAgXG59XG5cblxuXG5cbi8vIGNvbnN0IGdldEFpUmVzcG9uc2UgPSBhc3luYyAoY2hhdEJvdCwgY2hhdCwgY2hhdFJlcXVlc3QpID0+e1xuLy8gICAgIGNvbnN0IG9wZW5haSA9IG5ldyBPcGVuQUlBcGkobmV3IENvbmZpZ3VyYXRpb24oe1xuLy8gICAgICAgYXBpS2V5OiBwcm9jZXNzLmVudi5DSEFUX0FQSV9LRVlcbi8vICAgICB9KSk7XG4vLyAgICAgY29uc3QgZnJvbSA9IGNoYXRCb3QuZnJvbSA/IGBmcm9tICR7Y2hhdEJvdC5mcm9tfWAgOiAnJztcbi8vICAgICBjb25zdCBwcm9tcHQgPSBjaGF0Qm90LnByb21wdCA/IGAke2NoYXRCb3QucHJvbXB0fWAgOiAnJztcbi8vICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGNoYXRCb3QuZGVzY3JpcHRpb24gPyBgJHtjaGF0Qm90LmRlc2NyaXB0aW9ufWAgOiAnJztcbi8vICAgICBjb25zdCBncmVldGluZyA9IGNoYXRCb3QuZ3JlZXRpbmcgPyB7cm9sZTonYXNzaXN0YW50JywgY29udGVudDogY2hhdEJvdC5ncmVldGluZ30gOiB7fTtcbi8vICAgICBsZXQgc3lzdGVtUHJvbXB0ID0gYFlvdSBhcmUgJHtjaGF0Qm90Lm5hbWV9ICR7ZnJvbX0uICBUaGUgdXNlciB5b3UgYXJlIHNwZWFraW5nIHdpdGggaXMgJHtjaGF0UmVxdWVzdC5uYW1lfS4gJHtydWxlcy5qb2luKCcgJyl9ICR7ZGVzY3JpcHRpb259LiAke3Byb21wdH0uYFxuLy8gICAgIGxldCBtZXNzYWdlcyA9IFt7cm9sZTonc3lzdGVtJywgY29udGVudDogc3lzdGVtUHJvbXB0fSwgZ3JlZXRpbmcsIC4uLmNoYXQubWVzc2FnZXMsIGNoYXRSZXF1ZXN0XVxuICBcbi8vICAgICBjb25zdCByZXMgPSBhd2FpdCBvcGVuYWkuY3JlYXRlQ2hhdENvbXBsZXRpb24oe1xuLy8gICAgICAgbW9kZWw6IFwiZ3B0LTRcIixcbi8vICAgICAgIC8vIG1vZGVsOiBcImdwdC0zLjUtdHVyYm9cIixcbi8vICAgICAgIG1lc3NhZ2VzOiBtZXNzYWdlcyxcbi8vICAgICAgIG1heF90b2tlbnM6IDE1MCxcbi8vICAgICAgIHRlbXBlcmF0dXJlOiAwLjlcbi8vICAgICB9KTtcbi8vICAgICByZXR1cm4gcmVzLmRhdGEuY2hvaWNlc1swXS5tZXNzYWdlXG4vLyAgIH0iXSwibmFtZXMiOlsicHJveHkiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJtZXNzYWdlcyIsImNoYXRGZXRjaCIsInJlcyIsImZldGNoIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsImRhdGEiLCJqc29uIiwiZXJyIiwiY29uc29sZSIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnRlcnZpZXd5Ly4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;