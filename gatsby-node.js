/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
var __awaiter =
	(this && this.__awaiter) ||
	function(thisArg, _arguments, P, generator) {
		return new (P || (P = Promise))(function(resolve, reject) {
			function fulfilled(value) {
				try {
					step(generator.next(value))
				} catch (e) {
					reject(e)
				}
			}
			function rejected(value) {
				try {
					step(generator['throw'](value))
				} catch (e) {
					reject(e)
				}
			}
			function step(result) {
				result.done
					? resolve(result.value)
					: new P(function(resolve) {
							resolve(result.value)
					  }).then(fulfilled, rejected)
			}
			step(
				(generator = generator.apply(thisArg, _arguments || [])).next()
			)
		})
	}
var __generator =
	(this && this.__generator) ||
	function(thisArg, body) {
		var _ = {
				label: 0,
				sent: function() {
					if (t[0] & 1) throw t[1]
					return t[1]
				},
				trys: [],
				ops: []
			},
			f,
			y,
			t,
			g
		return (
			(g = { next: verb(0), throw: verb(1), return: verb(2) }),
			typeof Symbol === 'function' &&
				(g[Symbol.iterator] = function() {
					return this
				}),
			g
		)
		function verb(n) {
			return function(v) {
				return step([n, v])
			}
		}
		function step(op) {
			if (f) throw new TypeError('Generator is already executing.')
			while (_)
				try {
					if (
						((f = 1),
						y &&
							(t =
								op[0] & 2
									? y['return']
									: op[0]
									? y['throw'] ||
									  ((t = y['return']) && t.call(y), 0)
									: y.next) &&
							!(t = t.call(y, op[1])).done)
					)
						return t
					if (((y = 0), t)) op = [op[0] & 2, t.value]
					switch (op[0]) {
						case 0:
						case 1:
							t = op
							break
						case 4:
							_.label++
							return { value: op[1], done: false }
						case 5:
							_.label++
							y = op[1]
							op = [0]
							continue
						case 7:
							op = _.ops.pop()
							_.trys.pop()
							continue
						default:
							if (
								!((t = _.trys),
								(t = t.length > 0 && t[t.length - 1])) &&
								(op[0] === 6 || op[0] === 2)
							) {
								_ = 0
								continue
							}
							if (
								op[0] === 3 &&
								(!t || (op[1] > t[0] && op[1] < t[3]))
							) {
								_.label = op[1]
								break
							}
							if (op[0] === 6 && _.label < t[1]) {
								_.label = t[1]
								t = op
								break
							}
							if (t && _.label < t[2]) {
								_.label = t[2]
								_.ops.push(op)
								break
							}
							if (t[2]) _.ops.pop()
							_.trys.pop()
							continue
					}
					op = body.call(thisArg, _)
				} catch (e) {
					op = [6, e]
					y = 0
				} finally {
					f = t = 0
				}
			if (op[0] & 5) throw op[1]
			return { value: op[0] ? op[1] : void 0, done: true }
		}
	}
var _this = this
Object.defineProperty(exports, '__esModule', { value: true })
// You can delete this file if you're not using it
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
// You can delete this file if you're not using it
var path = require('path')
var format = require('date-fns/format')
var dir_name_parser_1 = require('./src/helpers/dir-name-parser')
// todo remove any from this file
var getMarkdownPages = function(fn) {
	return fn(
		'{\n\t\tallFile(filter: {sourceInstanceName: {eq: "pages"}}, sort: {fields: relativeDirectory, order: DESC}) {\n\t\t\tedges {\n\t\t\t\tnode {\n\t\t\t\t\trelativeDirectory\n\t\t\t\t}\n\t\t\t}\n\t\t}\n    }'
	)
}
var createPosts = function(edges, createPage) {
	return edges.map(function(post, index) {
		var node = post.node
		var previous = index === edges.length - 1 ? null : edges[index + 1].node
		var next = index === 0 ? null : edges[index - 1].node
		console.log(node.relativeDirectory)
		var date = format(
			dir_name_parser_1.getDefaultPageData(node.relativeDirectory).date,
			'MMMM Do YYYY'
		)
		var title = dir_name_parser_1.getDefaultPageData(node.relativeDirectory)
			.title
		createPage({
			path:
				'/' +
				dir_name_parser_1.getDefaultPageData(node.relativeDirectory)
					.slug,
			component: path.resolve('src/templates/blog.tsx'),
			context: {
				previous: previous,
				next: next,
				date: date,
				title: title,
				relativeDirectory: node.relativeDirectory
			}
		})
	})
}
exports.createPages = function(_a) {
	var actions = _a.actions,
		graphql = _a.graphql
	return __awaiter(_this, void 0, void 0, function() {
		var createPage, result, err_1, edges
		return __generator(this, function(_b) {
			switch (_b.label) {
				case 0:
					createPage = actions.createPage
					_b.label = 1
				case 1:
					_b.trys.push([1, 3, , 4])
					return [4 /*yield*/, getMarkdownPages(graphql)]
				case 2:
					result = _b.sent()
					return [3 /*break*/, 4]
				case 3:
					err_1 = _b.sent()
					console.warn('Could not load data', err_1)
					throw err_1
				case 4:
					edges = result.data.allFile.edges
					return [2 /*return*/, createPosts(edges, createPage)]
			}
		})
	})
}
