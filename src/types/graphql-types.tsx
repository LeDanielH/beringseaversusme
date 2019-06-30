import gql from 'graphql-tag'
import * as React from 'react'
import * as ReactApollo from 'react-apollo'
export type Maybe<T> = T | null
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string
	String: string
	Boolean: boolean
	Int: number
	Float: number
	/** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
	 * representation of dates and times using the Gregorian calendar.
	 */
	Date: any
	/** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
	JSON: any
}

export type BooleanQueryOperatorInput = {
	eq?: Maybe<Scalars['Boolean']>
	ne?: Maybe<Scalars['Boolean']>
	in?: Maybe<Array<Maybe<Scalars['Boolean']>>>
	nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>
}

export type DateQueryOperatorInput = {
	eq?: Maybe<Scalars['Date']>
	ne?: Maybe<Scalars['Date']>
	gt?: Maybe<Scalars['Date']>
	gte?: Maybe<Scalars['Date']>
	lt?: Maybe<Scalars['Date']>
	lte?: Maybe<Scalars['Date']>
	in?: Maybe<Array<Maybe<Scalars['Date']>>>
	nin?: Maybe<Array<Maybe<Scalars['Date']>>>
}

export type Directory = Node & {
	__typename?: 'Directory'
	id: Scalars['ID']
	parent?: Maybe<Node>
	children: Array<Node>
	internal: Internal
	sourceInstanceName?: Maybe<Scalars['String']>
	absolutePath?: Maybe<Scalars['String']>
	relativePath?: Maybe<Scalars['String']>
	extension?: Maybe<Scalars['String']>
	size?: Maybe<Scalars['Int']>
	prettySize?: Maybe<Scalars['String']>
	modifiedTime?: Maybe<Scalars['Date']>
	accessTime?: Maybe<Scalars['Date']>
	changeTime?: Maybe<Scalars['Date']>
	birthTime?: Maybe<Scalars['Date']>
	root?: Maybe<Scalars['String']>
	dir?: Maybe<Scalars['String']>
	base?: Maybe<Scalars['String']>
	ext?: Maybe<Scalars['String']>
	name?: Maybe<Scalars['String']>
	relativeDirectory?: Maybe<Scalars['String']>
	dev?: Maybe<Scalars['Float']>
	mode?: Maybe<Scalars['Int']>
	nlink?: Maybe<Scalars['Int']>
	uid?: Maybe<Scalars['Int']>
	gid?: Maybe<Scalars['Int']>
	rdev?: Maybe<Scalars['Int']>
	ino?: Maybe<Scalars['Float']>
	atimeMs?: Maybe<Scalars['Float']>
	mtimeMs?: Maybe<Scalars['Float']>
	ctimeMs?: Maybe<Scalars['Float']>
	birthtimeMs?: Maybe<Scalars['Float']>
	atime?: Maybe<Scalars['Date']>
	mtime?: Maybe<Scalars['Date']>
	ctime?: Maybe<Scalars['Date']>
	birthtime?: Maybe<Scalars['Date']>
}

export type DirectoryModifiedTimeArgs = {
	formatString?: Maybe<Scalars['String']>
	fromNow?: Maybe<Scalars['Boolean']>
	difference?: Maybe<Scalars['String']>
	locale?: Maybe<Scalars['String']>
}

export type DirectoryAccessTimeArgs = {
	formatString?: Maybe<Scalars['String']>
	fromNow?: Maybe<Scalars['Boolean']>
	difference?: Maybe<Scalars['String']>
	locale?: Maybe<Scalars['String']>
}

export type DirectoryChangeTimeArgs = {
	formatString?: Maybe<Scalars['String']>
	fromNow?: Maybe<Scalars['Boolean']>
	difference?: Maybe<Scalars['String']>
	locale?: Maybe<Scalars['String']>
}

export type DirectoryBirthTimeArgs = {
	formatString?: Maybe<Scalars['String']>
	fromNow?: Maybe<Scalars['Boolean']>
	difference?: Maybe<Scalars['String']>
	locale?: Maybe<Scalars['String']>
}

export type DirectoryAtimeArgs = {
	formatString?: Maybe<Scalars['String']>
	fromNow?: Maybe<Scalars['Boolean']>
	difference?: Maybe<Scalars['String']>
	locale?: Maybe<Scalars['String']>
}

export type DirectoryMtimeArgs = {
	formatString?: Maybe<Scalars['String']>
	fromNow?: Maybe<Scalars['Boolean']>
	difference?: Maybe<Scalars['String']>
	locale?: Maybe<Scalars['String']>
}

export type DirectoryCtimeArgs = {
	formatString?: Maybe<Scalars['String']>
	fromNow?: Maybe<Scalars['Boolean']>
	difference?: Maybe<Scalars['String']>
	locale?: Maybe<Scalars['String']>
}

export type DirectoryBirthtimeArgs = {
	formatString?: Maybe<Scalars['String']>
	fromNow?: Maybe<Scalars['Boolean']>
	difference?: Maybe<Scalars['String']>
	locale?: Maybe<Scalars['String']>
}

export type DirectoryConnection = {
	__typename?: 'DirectoryConnection'
	totalCount: Scalars['Int']
	edges: Array<DirectoryEdge>
	nodes: Array<Directory>
	pageInfo: PageInfo
	distinct: Array<Scalars['String']>
	group: Array<DirectoryGroupConnection>
}

export type DirectoryConnectionDistinctArgs = {
	field: DirectoryFieldsEnum
}

export type DirectoryConnectionGroupArgs = {
	skip?: Maybe<Scalars['Int']>
	limit?: Maybe<Scalars['Int']>
	field: DirectoryFieldsEnum
}

export type DirectoryEdge = {
	__typename?: 'DirectoryEdge'
	next?: Maybe<Directory>
	node: Directory
	previous?: Maybe<Directory>
}

export enum DirectoryFieldsEnum {
	id = 'id',
	parent___id = 'parent___id',
	parent___parent___id = 'parent___parent___id',
	parent___parent___parent___id = 'parent___parent___parent___id',
	parent___parent___parent___children = 'parent___parent___parent___children',
	parent___parent___children = 'parent___parent___children',
	parent___parent___children___id = 'parent___parent___children___id',
	parent___parent___children___children = 'parent___parent___children___children',
	parent___parent___internal___content = 'parent___parent___internal___content',
	parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
	parent___parent___internal___description = 'parent___parent___internal___description',
	parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
	parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
	parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
	parent___parent___internal___owner = 'parent___parent___internal___owner',
	parent___parent___internal___type = 'parent___parent___internal___type',
	parent___children = 'parent___children',
	parent___children___id = 'parent___children___id',
	parent___children___parent___id = 'parent___children___parent___id',
	parent___children___parent___children = 'parent___children___parent___children',
	parent___children___children = 'parent___children___children',
	parent___children___children___id = 'parent___children___children___id',
	parent___children___children___children = 'parent___children___children___children',
	parent___children___internal___content = 'parent___children___internal___content',
	parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
	parent___children___internal___description = 'parent___children___internal___description',
	parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
	parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
	parent___children___internal___mediaType = 'parent___children___internal___mediaType',
	parent___children___internal___owner = 'parent___children___internal___owner',
	parent___children___internal___type = 'parent___children___internal___type',
	parent___internal___content = 'parent___internal___content',
	parent___internal___contentDigest = 'parent___internal___contentDigest',
	parent___internal___description = 'parent___internal___description',
	parent___internal___fieldOwners = 'parent___internal___fieldOwners',
	parent___internal___ignoreType = 'parent___internal___ignoreType',
	parent___internal___mediaType = 'parent___internal___mediaType',
	parent___internal___owner = 'parent___internal___owner',
	parent___internal___type = 'parent___internal___type',
	children = 'children',
	children___id = 'children___id',
	children___parent___id = 'children___parent___id',
	children___parent___parent___id = 'children___parent___parent___id',
	children___parent___parent___children = 'children___parent___parent___children',
	children___parent___children = 'children___parent___children',
	children___parent___children___id = 'children___parent___children___id',
	children___parent___children___children = 'children___parent___children___children',
	children___parent___internal___content = 'children___parent___internal___content',
	children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
	children___parent___internal___description = 'children___parent___internal___description',
	children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
	children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
	children___parent___internal___mediaType = 'children___parent___internal___mediaType',
	children___parent___internal___owner = 'children___parent___internal___owner',
	children___parent___internal___type = 'children___parent___internal___type',
	children___children = 'children___children',
	children___children___id = 'children___children___id',
	children___children___parent___id = 'children___children___parent___id',
	children___children___parent___children = 'children___children___parent___children',
	children___children___children = 'children___children___children',
	children___children___children___id = 'children___children___children___id',
	children___children___children___children = 'children___children___children___children',
	children___children___internal___content = 'children___children___internal___content',
	children___children___internal___contentDigest = 'children___children___internal___contentDigest',
	children___children___internal___description = 'children___children___internal___description',
	children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
	children___children___internal___ignoreType = 'children___children___internal___ignoreType',
	children___children___internal___mediaType = 'children___children___internal___mediaType',
	children___children___internal___owner = 'children___children___internal___owner',
	children___children___internal___type = 'children___children___internal___type',
	children___internal___content = 'children___internal___content',
	children___internal___contentDigest = 'children___internal___contentDigest',
	children___internal___description = 'children___internal___description',
	children___internal___fieldOwners = 'children___internal___fieldOwners',
	children___internal___ignoreType = 'children___internal___ignoreType',
	children___internal___mediaType = 'children___internal___mediaType',
	children___internal___owner = 'children___internal___owner',
	children___internal___type = 'children___internal___type',
	internal___content = 'internal___content',
	internal___contentDigest = 'internal___contentDigest',
	internal___description = 'internal___description',
	internal___fieldOwners = 'internal___fieldOwners',
	internal___ignoreType = 'internal___ignoreType',
	internal___mediaType = 'internal___mediaType',
	internal___owner = 'internal___owner',
	internal___type = 'internal___type',
	sourceInstanceName = 'sourceInstanceName',
	absolutePath = 'absolutePath',
	relativePath = 'relativePath',
	extension = 'extension',
	size = 'size',
	prettySize = 'prettySize',
	modifiedTime = 'modifiedTime',
	accessTime = 'accessTime',
	changeTime = 'changeTime',
	birthTime = 'birthTime',
	root = 'root',
	dir = 'dir',
	base = 'base',
	ext = 'ext',
	name = 'name',
	relativeDirectory = 'relativeDirectory',
	dev = 'dev',
	mode = 'mode',
	nlink = 'nlink',
	uid = 'uid',
	gid = 'gid',
	rdev = 'rdev',
	ino = 'ino',
	atimeMs = 'atimeMs',
	mtimeMs = 'mtimeMs',
	ctimeMs = 'ctimeMs',
	birthtimeMs = 'birthtimeMs',
	atime = 'atime',
	mtime = 'mtime',
	ctime = 'ctime',
	birthtime = 'birthtime'
}

export type DirectoryFilterInput = {
	id?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	children?: Maybe<NodeFilterListInput>
	internal?: Maybe<InternalFilterInput>
	sourceInstanceName?: Maybe<StringQueryOperatorInput>
	absolutePath?: Maybe<StringQueryOperatorInput>
	relativePath?: Maybe<StringQueryOperatorInput>
	extension?: Maybe<StringQueryOperatorInput>
	size?: Maybe<IntQueryOperatorInput>
	prettySize?: Maybe<StringQueryOperatorInput>
	modifiedTime?: Maybe<DateQueryOperatorInput>
	accessTime?: Maybe<DateQueryOperatorInput>
	changeTime?: Maybe<DateQueryOperatorInput>
	birthTime?: Maybe<DateQueryOperatorInput>
	root?: Maybe<StringQueryOperatorInput>
	dir?: Maybe<StringQueryOperatorInput>
	base?: Maybe<StringQueryOperatorInput>
	ext?: Maybe<StringQueryOperatorInput>
	name?: Maybe<StringQueryOperatorInput>
	relativeDirectory?: Maybe<StringQueryOperatorInput>
	dev?: Maybe<FloatQueryOperatorInput>
	mode?: Maybe<IntQueryOperatorInput>
	nlink?: Maybe<IntQueryOperatorInput>
	uid?: Maybe<IntQueryOperatorInput>
	gid?: Maybe<IntQueryOperatorInput>
	rdev?: Maybe<IntQueryOperatorInput>
	ino?: Maybe<FloatQueryOperatorInput>
	atimeMs?: Maybe<FloatQueryOperatorInput>
	mtimeMs?: Maybe<FloatQueryOperatorInput>
	ctimeMs?: Maybe<FloatQueryOperatorInput>
	birthtimeMs?: Maybe<FloatQueryOperatorInput>
	atime?: Maybe<DateQueryOperatorInput>
	mtime?: Maybe<DateQueryOperatorInput>
	ctime?: Maybe<DateQueryOperatorInput>
	birthtime?: Maybe<DateQueryOperatorInput>
}

export type DirectoryGroupConnection = {
	__typename?: 'DirectoryGroupConnection'
	totalCount: Scalars['Int']
	edges: Array<DirectoryEdge>
	nodes: Array<Directory>
	pageInfo: PageInfo
	field: Scalars['String']
	fieldValue?: Maybe<Scalars['String']>
}

export type DirectorySortInput = {
	fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>
	order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type DuotoneGradient = {
	highlight?: Maybe<Scalars['String']>
	shadow?: Maybe<Scalars['String']>
	opacity?: Maybe<Scalars['Int']>
}

export enum ExcerptFormats {
	PLAIN = 'PLAIN',
	HTML = 'HTML',
	MARKDOWN = 'MARKDOWN'
}

export type File = Node & {
	__typename?: 'File'
	id: Scalars['ID']
	parent?: Maybe<Node>
	children: Array<Node>
	internal: Internal
	sourceInstanceName?: Maybe<Scalars['String']>
	absolutePath?: Maybe<Scalars['String']>
	relativePath?: Maybe<Scalars['String']>
	extension?: Maybe<Scalars['String']>
	size?: Maybe<Scalars['Int']>
	prettySize?: Maybe<Scalars['String']>
	modifiedTime?: Maybe<Scalars['Date']>
	accessTime?: Maybe<Scalars['Date']>
	changeTime?: Maybe<Scalars['Date']>
	birthTime?: Maybe<Scalars['Date']>
	root?: Maybe<Scalars['String']>
	dir?: Maybe<Scalars['String']>
	base?: Maybe<Scalars['String']>
	ext?: Maybe<Scalars['String']>
	name?: Maybe<Scalars['String']>
	relativeDirectory?: Maybe<Scalars['String']>
	dev?: Maybe<Scalars['Float']>
	mode?: Maybe<Scalars['Int']>
	nlink?: Maybe<Scalars['Int']>
	uid?: Maybe<Scalars['Int']>
	gid?: Maybe<Scalars['Int']>
	rdev?: Maybe<Scalars['Int']>
	ino?: Maybe<Scalars['Float']>
	atimeMs?: Maybe<Scalars['Float']>
	mtimeMs?: Maybe<Scalars['Float']>
	ctimeMs?: Maybe<Scalars['Float']>
	birthtimeMs?: Maybe<Scalars['Float']>
	atime?: Maybe<Scalars['Date']>
	mtime?: Maybe<Scalars['Date']>
	ctime?: Maybe<Scalars['Date']>
	birthtime?: Maybe<Scalars['Date']>
	/** Copy file to static directory and return public url to it */
	publicURL?: Maybe<Scalars['String']>
	childImageSharp?: Maybe<ImageSharp>
	childMarkdownRemark?: Maybe<MarkdownRemark>
}

export type FileModifiedTimeArgs = {
	formatString?: Maybe<Scalars['String']>
	fromNow?: Maybe<Scalars['Boolean']>
	difference?: Maybe<Scalars['String']>
	locale?: Maybe<Scalars['String']>
}

export type FileAccessTimeArgs = {
	formatString?: Maybe<Scalars['String']>
	fromNow?: Maybe<Scalars['Boolean']>
	difference?: Maybe<Scalars['String']>
	locale?: Maybe<Scalars['String']>
}

export type FileChangeTimeArgs = {
	formatString?: Maybe<Scalars['String']>
	fromNow?: Maybe<Scalars['Boolean']>
	difference?: Maybe<Scalars['String']>
	locale?: Maybe<Scalars['String']>
}

export type FileBirthTimeArgs = {
	formatString?: Maybe<Scalars['String']>
	fromNow?: Maybe<Scalars['Boolean']>
	difference?: Maybe<Scalars['String']>
	locale?: Maybe<Scalars['String']>
}

export type FileAtimeArgs = {
	formatString?: Maybe<Scalars['String']>
	fromNow?: Maybe<Scalars['Boolean']>
	difference?: Maybe<Scalars['String']>
	locale?: Maybe<Scalars['String']>
}

export type FileMtimeArgs = {
	formatString?: Maybe<Scalars['String']>
	fromNow?: Maybe<Scalars['Boolean']>
	difference?: Maybe<Scalars['String']>
	locale?: Maybe<Scalars['String']>
}

export type FileCtimeArgs = {
	formatString?: Maybe<Scalars['String']>
	fromNow?: Maybe<Scalars['Boolean']>
	difference?: Maybe<Scalars['String']>
	locale?: Maybe<Scalars['String']>
}

export type FileBirthtimeArgs = {
	formatString?: Maybe<Scalars['String']>
	fromNow?: Maybe<Scalars['Boolean']>
	difference?: Maybe<Scalars['String']>
	locale?: Maybe<Scalars['String']>
}

export type FileConnection = {
	__typename?: 'FileConnection'
	totalCount: Scalars['Int']
	edges: Array<FileEdge>
	nodes: Array<File>
	pageInfo: PageInfo
	distinct: Array<Scalars['String']>
	group: Array<FileGroupConnection>
}

export type FileConnectionDistinctArgs = {
	field: FileFieldsEnum
}

export type FileConnectionGroupArgs = {
	skip?: Maybe<Scalars['Int']>
	limit?: Maybe<Scalars['Int']>
	field: FileFieldsEnum
}

export type FileEdge = {
	__typename?: 'FileEdge'
	next?: Maybe<File>
	node: File
	previous?: Maybe<File>
}

export enum FileFieldsEnum {
	id = 'id',
	parent___id = 'parent___id',
	parent___parent___id = 'parent___parent___id',
	parent___parent___parent___id = 'parent___parent___parent___id',
	parent___parent___parent___children = 'parent___parent___parent___children',
	parent___parent___children = 'parent___parent___children',
	parent___parent___children___id = 'parent___parent___children___id',
	parent___parent___children___children = 'parent___parent___children___children',
	parent___parent___internal___content = 'parent___parent___internal___content',
	parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
	parent___parent___internal___description = 'parent___parent___internal___description',
	parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
	parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
	parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
	parent___parent___internal___owner = 'parent___parent___internal___owner',
	parent___parent___internal___type = 'parent___parent___internal___type',
	parent___children = 'parent___children',
	parent___children___id = 'parent___children___id',
	parent___children___parent___id = 'parent___children___parent___id',
	parent___children___parent___children = 'parent___children___parent___children',
	parent___children___children = 'parent___children___children',
	parent___children___children___id = 'parent___children___children___id',
	parent___children___children___children = 'parent___children___children___children',
	parent___children___internal___content = 'parent___children___internal___content',
	parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
	parent___children___internal___description = 'parent___children___internal___description',
	parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
	parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
	parent___children___internal___mediaType = 'parent___children___internal___mediaType',
	parent___children___internal___owner = 'parent___children___internal___owner',
	parent___children___internal___type = 'parent___children___internal___type',
	parent___internal___content = 'parent___internal___content',
	parent___internal___contentDigest = 'parent___internal___contentDigest',
	parent___internal___description = 'parent___internal___description',
	parent___internal___fieldOwners = 'parent___internal___fieldOwners',
	parent___internal___ignoreType = 'parent___internal___ignoreType',
	parent___internal___mediaType = 'parent___internal___mediaType',
	parent___internal___owner = 'parent___internal___owner',
	parent___internal___type = 'parent___internal___type',
	children = 'children',
	children___id = 'children___id',
	children___parent___id = 'children___parent___id',
	children___parent___parent___id = 'children___parent___parent___id',
	children___parent___parent___children = 'children___parent___parent___children',
	children___parent___children = 'children___parent___children',
	children___parent___children___id = 'children___parent___children___id',
	children___parent___children___children = 'children___parent___children___children',
	children___parent___internal___content = 'children___parent___internal___content',
	children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
	children___parent___internal___description = 'children___parent___internal___description',
	children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
	children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
	children___parent___internal___mediaType = 'children___parent___internal___mediaType',
	children___parent___internal___owner = 'children___parent___internal___owner',
	children___parent___internal___type = 'children___parent___internal___type',
	children___children = 'children___children',
	children___children___id = 'children___children___id',
	children___children___parent___id = 'children___children___parent___id',
	children___children___parent___children = 'children___children___parent___children',
	children___children___children = 'children___children___children',
	children___children___children___id = 'children___children___children___id',
	children___children___children___children = 'children___children___children___children',
	children___children___internal___content = 'children___children___internal___content',
	children___children___internal___contentDigest = 'children___children___internal___contentDigest',
	children___children___internal___description = 'children___children___internal___description',
	children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
	children___children___internal___ignoreType = 'children___children___internal___ignoreType',
	children___children___internal___mediaType = 'children___children___internal___mediaType',
	children___children___internal___owner = 'children___children___internal___owner',
	children___children___internal___type = 'children___children___internal___type',
	children___internal___content = 'children___internal___content',
	children___internal___contentDigest = 'children___internal___contentDigest',
	children___internal___description = 'children___internal___description',
	children___internal___fieldOwners = 'children___internal___fieldOwners',
	children___internal___ignoreType = 'children___internal___ignoreType',
	children___internal___mediaType = 'children___internal___mediaType',
	children___internal___owner = 'children___internal___owner',
	children___internal___type = 'children___internal___type',
	internal___content = 'internal___content',
	internal___contentDigest = 'internal___contentDigest',
	internal___description = 'internal___description',
	internal___fieldOwners = 'internal___fieldOwners',
	internal___ignoreType = 'internal___ignoreType',
	internal___mediaType = 'internal___mediaType',
	internal___owner = 'internal___owner',
	internal___type = 'internal___type',
	sourceInstanceName = 'sourceInstanceName',
	absolutePath = 'absolutePath',
	relativePath = 'relativePath',
	extension = 'extension',
	size = 'size',
	prettySize = 'prettySize',
	modifiedTime = 'modifiedTime',
	accessTime = 'accessTime',
	changeTime = 'changeTime',
	birthTime = 'birthTime',
	root = 'root',
	dir = 'dir',
	base = 'base',
	ext = 'ext',
	name = 'name',
	relativeDirectory = 'relativeDirectory',
	dev = 'dev',
	mode = 'mode',
	nlink = 'nlink',
	uid = 'uid',
	gid = 'gid',
	rdev = 'rdev',
	ino = 'ino',
	atimeMs = 'atimeMs',
	mtimeMs = 'mtimeMs',
	ctimeMs = 'ctimeMs',
	birthtimeMs = 'birthtimeMs',
	atime = 'atime',
	mtime = 'mtime',
	ctime = 'ctime',
	birthtime = 'birthtime',
	publicURL = 'publicURL'
}

export type FileFilterInput = {
	id?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	children?: Maybe<NodeFilterListInput>
	internal?: Maybe<InternalFilterInput>
	sourceInstanceName?: Maybe<StringQueryOperatorInput>
	absolutePath?: Maybe<StringQueryOperatorInput>
	relativePath?: Maybe<StringQueryOperatorInput>
	extension?: Maybe<StringQueryOperatorInput>
	size?: Maybe<IntQueryOperatorInput>
	prettySize?: Maybe<StringQueryOperatorInput>
	modifiedTime?: Maybe<DateQueryOperatorInput>
	accessTime?: Maybe<DateQueryOperatorInput>
	changeTime?: Maybe<DateQueryOperatorInput>
	birthTime?: Maybe<DateQueryOperatorInput>
	root?: Maybe<StringQueryOperatorInput>
	dir?: Maybe<StringQueryOperatorInput>
	base?: Maybe<StringQueryOperatorInput>
	ext?: Maybe<StringQueryOperatorInput>
	name?: Maybe<StringQueryOperatorInput>
	relativeDirectory?: Maybe<StringQueryOperatorInput>
	dev?: Maybe<FloatQueryOperatorInput>
	mode?: Maybe<IntQueryOperatorInput>
	nlink?: Maybe<IntQueryOperatorInput>
	uid?: Maybe<IntQueryOperatorInput>
	gid?: Maybe<IntQueryOperatorInput>
	rdev?: Maybe<IntQueryOperatorInput>
	ino?: Maybe<FloatQueryOperatorInput>
	atimeMs?: Maybe<FloatQueryOperatorInput>
	mtimeMs?: Maybe<FloatQueryOperatorInput>
	ctimeMs?: Maybe<FloatQueryOperatorInput>
	birthtimeMs?: Maybe<FloatQueryOperatorInput>
	atime?: Maybe<DateQueryOperatorInput>
	mtime?: Maybe<DateQueryOperatorInput>
	ctime?: Maybe<DateQueryOperatorInput>
	birthtime?: Maybe<DateQueryOperatorInput>
	publicURL?: Maybe<StringQueryOperatorInput>
}

export type FileGroupConnection = {
	__typename?: 'FileGroupConnection'
	totalCount: Scalars['Int']
	edges: Array<FileEdge>
	nodes: Array<File>
	pageInfo: PageInfo
	field: Scalars['String']
	fieldValue?: Maybe<Scalars['String']>
}

export type FileSortInput = {
	fields?: Maybe<Array<Maybe<FileFieldsEnum>>>
	order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type FloatQueryOperatorInput = {
	eq?: Maybe<Scalars['Float']>
	ne?: Maybe<Scalars['Float']>
	gt?: Maybe<Scalars['Float']>
	gte?: Maybe<Scalars['Float']>
	lt?: Maybe<Scalars['Float']>
	lte?: Maybe<Scalars['Float']>
	in?: Maybe<Array<Maybe<Scalars['Float']>>>
	nin?: Maybe<Array<Maybe<Scalars['Float']>>>
}

export enum HeadingLevels {
	h1 = 'h1',
	h2 = 'h2',
	h3 = 'h3',
	h4 = 'h4',
	h5 = 'h5',
	h6 = 'h6'
}

export enum ImageCropFocus {
	CENTER = 'CENTER',
	NORTH = 'NORTH',
	NORTHEAST = 'NORTHEAST',
	EAST = 'EAST',
	SOUTHEAST = 'SOUTHEAST',
	SOUTH = 'SOUTH',
	SOUTHWEST = 'SOUTHWEST',
	WEST = 'WEST',
	NORTHWEST = 'NORTHWEST',
	ENTROPY = 'ENTROPY',
	ATTENTION = 'ATTENTION'
}

export enum ImageFit {
	COVER = 'COVER',
	CONTAIN = 'CONTAIN',
	FILL = 'FILL'
}

export enum ImageFormat {
	NO_CHANGE = 'NO_CHANGE',
	JPG = 'JPG',
	PNG = 'PNG',
	WEBP = 'WEBP'
}

export type ImageSharp = Node & {
	__typename?: 'ImageSharp'
	id: Scalars['ID']
	parent?: Maybe<Node>
	children: Array<Node>
	internal: Internal
	fixed?: Maybe<ImageSharpFixed>
	resolutions?: Maybe<ImageSharpResolutions>
	fluid?: Maybe<ImageSharpFluid>
	sizes?: Maybe<ImageSharpSizes>
	original?: Maybe<ImageSharpOriginal>
	resize?: Maybe<ImageSharpResize>
}

export type ImageSharpFixedArgs = {
	width?: Maybe<Scalars['Int']>
	height?: Maybe<Scalars['Int']>
	base64Width?: Maybe<Scalars['Int']>
	jpegProgressive?: Maybe<Scalars['Boolean']>
	pngCompressionSpeed?: Maybe<Scalars['Int']>
	grayscale?: Maybe<Scalars['Boolean']>
	duotone?: Maybe<DuotoneGradient>
	traceSVG?: Maybe<Potrace>
	quality?: Maybe<Scalars['Int']>
	toFormat?: Maybe<ImageFormat>
	toFormatBase64?: Maybe<ImageFormat>
	cropFocus?: Maybe<ImageCropFocus>
	fit?: Maybe<ImageFit>
	background?: Maybe<Scalars['String']>
	rotate?: Maybe<Scalars['Int']>
	trim?: Maybe<Scalars['Float']>
}

export type ImageSharpResolutionsArgs = {
	width?: Maybe<Scalars['Int']>
	height?: Maybe<Scalars['Int']>
	base64Width?: Maybe<Scalars['Int']>
	jpegProgressive?: Maybe<Scalars['Boolean']>
	pngCompressionSpeed?: Maybe<Scalars['Int']>
	grayscale?: Maybe<Scalars['Boolean']>
	duotone?: Maybe<DuotoneGradient>
	traceSVG?: Maybe<Potrace>
	quality?: Maybe<Scalars['Int']>
	toFormat?: Maybe<ImageFormat>
	toFormatBase64?: Maybe<ImageFormat>
	cropFocus?: Maybe<ImageCropFocus>
	fit?: Maybe<ImageFit>
	background?: Maybe<Scalars['String']>
	rotate?: Maybe<Scalars['Int']>
	trim?: Maybe<Scalars['Float']>
}

export type ImageSharpFluidArgs = {
	maxWidth?: Maybe<Scalars['Int']>
	maxHeight?: Maybe<Scalars['Int']>
	base64Width?: Maybe<Scalars['Int']>
	grayscale?: Maybe<Scalars['Boolean']>
	jpegProgressive?: Maybe<Scalars['Boolean']>
	pngCompressionSpeed?: Maybe<Scalars['Int']>
	duotone?: Maybe<DuotoneGradient>
	traceSVG?: Maybe<Potrace>
	quality?: Maybe<Scalars['Int']>
	toFormat?: Maybe<ImageFormat>
	toFormatBase64?: Maybe<ImageFormat>
	cropFocus?: Maybe<ImageCropFocus>
	fit?: Maybe<ImageFit>
	background?: Maybe<Scalars['String']>
	rotate?: Maybe<Scalars['Int']>
	trim?: Maybe<Scalars['Float']>
	sizes?: Maybe<Scalars['String']>
	srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
}

export type ImageSharpSizesArgs = {
	maxWidth?: Maybe<Scalars['Int']>
	maxHeight?: Maybe<Scalars['Int']>
	base64Width?: Maybe<Scalars['Int']>
	grayscale?: Maybe<Scalars['Boolean']>
	jpegProgressive?: Maybe<Scalars['Boolean']>
	pngCompressionSpeed?: Maybe<Scalars['Int']>
	duotone?: Maybe<DuotoneGradient>
	traceSVG?: Maybe<Potrace>
	quality?: Maybe<Scalars['Int']>
	toFormat?: Maybe<ImageFormat>
	toFormatBase64?: Maybe<ImageFormat>
	cropFocus?: Maybe<ImageCropFocus>
	fit?: Maybe<ImageFit>
	background?: Maybe<Scalars['String']>
	rotate?: Maybe<Scalars['Int']>
	trim?: Maybe<Scalars['Float']>
	sizes?: Maybe<Scalars['String']>
	srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
}

export type ImageSharpResizeArgs = {
	width?: Maybe<Scalars['Int']>
	height?: Maybe<Scalars['Int']>
	quality?: Maybe<Scalars['Int']>
	jpegProgressive?: Maybe<Scalars['Boolean']>
	pngCompressionLevel?: Maybe<Scalars['Int']>
	pngCompressionSpeed?: Maybe<Scalars['Int']>
	grayscale?: Maybe<Scalars['Boolean']>
	duotone?: Maybe<DuotoneGradient>
	base64?: Maybe<Scalars['Boolean']>
	traceSVG?: Maybe<Potrace>
	toFormat?: Maybe<ImageFormat>
	cropFocus?: Maybe<ImageCropFocus>
	fit?: Maybe<ImageFit>
	background?: Maybe<Scalars['String']>
	rotate?: Maybe<Scalars['Int']>
	trim?: Maybe<Scalars['Float']>
}

export type ImageSharpConnection = {
	__typename?: 'ImageSharpConnection'
	totalCount: Scalars['Int']
	edges: Array<ImageSharpEdge>
	nodes: Array<ImageSharp>
	pageInfo: PageInfo
	distinct: Array<Scalars['String']>
	group: Array<ImageSharpGroupConnection>
}

export type ImageSharpConnectionDistinctArgs = {
	field: ImageSharpFieldsEnum
}

export type ImageSharpConnectionGroupArgs = {
	skip?: Maybe<Scalars['Int']>
	limit?: Maybe<Scalars['Int']>
	field: ImageSharpFieldsEnum
}

export type ImageSharpEdge = {
	__typename?: 'ImageSharpEdge'
	next?: Maybe<ImageSharp>
	node: ImageSharp
	previous?: Maybe<ImageSharp>
}

export enum ImageSharpFieldsEnum {
	id = 'id',
	parent___id = 'parent___id',
	parent___parent___id = 'parent___parent___id',
	parent___parent___parent___id = 'parent___parent___parent___id',
	parent___parent___parent___children = 'parent___parent___parent___children',
	parent___parent___children = 'parent___parent___children',
	parent___parent___children___id = 'parent___parent___children___id',
	parent___parent___children___children = 'parent___parent___children___children',
	parent___parent___internal___content = 'parent___parent___internal___content',
	parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
	parent___parent___internal___description = 'parent___parent___internal___description',
	parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
	parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
	parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
	parent___parent___internal___owner = 'parent___parent___internal___owner',
	parent___parent___internal___type = 'parent___parent___internal___type',
	parent___children = 'parent___children',
	parent___children___id = 'parent___children___id',
	parent___children___parent___id = 'parent___children___parent___id',
	parent___children___parent___children = 'parent___children___parent___children',
	parent___children___children = 'parent___children___children',
	parent___children___children___id = 'parent___children___children___id',
	parent___children___children___children = 'parent___children___children___children',
	parent___children___internal___content = 'parent___children___internal___content',
	parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
	parent___children___internal___description = 'parent___children___internal___description',
	parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
	parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
	parent___children___internal___mediaType = 'parent___children___internal___mediaType',
	parent___children___internal___owner = 'parent___children___internal___owner',
	parent___children___internal___type = 'parent___children___internal___type',
	parent___internal___content = 'parent___internal___content',
	parent___internal___contentDigest = 'parent___internal___contentDigest',
	parent___internal___description = 'parent___internal___description',
	parent___internal___fieldOwners = 'parent___internal___fieldOwners',
	parent___internal___ignoreType = 'parent___internal___ignoreType',
	parent___internal___mediaType = 'parent___internal___mediaType',
	parent___internal___owner = 'parent___internal___owner',
	parent___internal___type = 'parent___internal___type',
	children = 'children',
	children___id = 'children___id',
	children___parent___id = 'children___parent___id',
	children___parent___parent___id = 'children___parent___parent___id',
	children___parent___parent___children = 'children___parent___parent___children',
	children___parent___children = 'children___parent___children',
	children___parent___children___id = 'children___parent___children___id',
	children___parent___children___children = 'children___parent___children___children',
	children___parent___internal___content = 'children___parent___internal___content',
	children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
	children___parent___internal___description = 'children___parent___internal___description',
	children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
	children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
	children___parent___internal___mediaType = 'children___parent___internal___mediaType',
	children___parent___internal___owner = 'children___parent___internal___owner',
	children___parent___internal___type = 'children___parent___internal___type',
	children___children = 'children___children',
	children___children___id = 'children___children___id',
	children___children___parent___id = 'children___children___parent___id',
	children___children___parent___children = 'children___children___parent___children',
	children___children___children = 'children___children___children',
	children___children___children___id = 'children___children___children___id',
	children___children___children___children = 'children___children___children___children',
	children___children___internal___content = 'children___children___internal___content',
	children___children___internal___contentDigest = 'children___children___internal___contentDigest',
	children___children___internal___description = 'children___children___internal___description',
	children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
	children___children___internal___ignoreType = 'children___children___internal___ignoreType',
	children___children___internal___mediaType = 'children___children___internal___mediaType',
	children___children___internal___owner = 'children___children___internal___owner',
	children___children___internal___type = 'children___children___internal___type',
	children___internal___content = 'children___internal___content',
	children___internal___contentDigest = 'children___internal___contentDigest',
	children___internal___description = 'children___internal___description',
	children___internal___fieldOwners = 'children___internal___fieldOwners',
	children___internal___ignoreType = 'children___internal___ignoreType',
	children___internal___mediaType = 'children___internal___mediaType',
	children___internal___owner = 'children___internal___owner',
	children___internal___type = 'children___internal___type',
	internal___content = 'internal___content',
	internal___contentDigest = 'internal___contentDigest',
	internal___description = 'internal___description',
	internal___fieldOwners = 'internal___fieldOwners',
	internal___ignoreType = 'internal___ignoreType',
	internal___mediaType = 'internal___mediaType',
	internal___owner = 'internal___owner',
	internal___type = 'internal___type',
	fixed___base64 = 'fixed___base64',
	fixed___tracedSVG = 'fixed___tracedSVG',
	fixed___aspectRatio = 'fixed___aspectRatio',
	fixed___width = 'fixed___width',
	fixed___height = 'fixed___height',
	fixed___src = 'fixed___src',
	fixed___srcSet = 'fixed___srcSet',
	fixed___srcWebp = 'fixed___srcWebp',
	fixed___srcSetWebp = 'fixed___srcSetWebp',
	fixed___originalName = 'fixed___originalName',
	resolutions___base64 = 'resolutions___base64',
	resolutions___tracedSVG = 'resolutions___tracedSVG',
	resolutions___aspectRatio = 'resolutions___aspectRatio',
	resolutions___width = 'resolutions___width',
	resolutions___height = 'resolutions___height',
	resolutions___src = 'resolutions___src',
	resolutions___srcSet = 'resolutions___srcSet',
	resolutions___srcWebp = 'resolutions___srcWebp',
	resolutions___srcSetWebp = 'resolutions___srcSetWebp',
	resolutions___originalName = 'resolutions___originalName',
	fluid___base64 = 'fluid___base64',
	fluid___tracedSVG = 'fluid___tracedSVG',
	fluid___aspectRatio = 'fluid___aspectRatio',
	fluid___src = 'fluid___src',
	fluid___srcSet = 'fluid___srcSet',
	fluid___srcWebp = 'fluid___srcWebp',
	fluid___srcSetWebp = 'fluid___srcSetWebp',
	fluid___sizes = 'fluid___sizes',
	fluid___originalImg = 'fluid___originalImg',
	fluid___originalName = 'fluid___originalName',
	fluid___presentationWidth = 'fluid___presentationWidth',
	fluid___presentationHeight = 'fluid___presentationHeight',
	sizes___base64 = 'sizes___base64',
	sizes___tracedSVG = 'sizes___tracedSVG',
	sizes___aspectRatio = 'sizes___aspectRatio',
	sizes___src = 'sizes___src',
	sizes___srcSet = 'sizes___srcSet',
	sizes___srcWebp = 'sizes___srcWebp',
	sizes___srcSetWebp = 'sizes___srcSetWebp',
	sizes___sizes = 'sizes___sizes',
	sizes___originalImg = 'sizes___originalImg',
	sizes___originalName = 'sizes___originalName',
	sizes___presentationWidth = 'sizes___presentationWidth',
	sizes___presentationHeight = 'sizes___presentationHeight',
	original___width = 'original___width',
	original___height = 'original___height',
	original___src = 'original___src',
	resize___src = 'resize___src',
	resize___tracedSVG = 'resize___tracedSVG',
	resize___width = 'resize___width',
	resize___height = 'resize___height',
	resize___aspectRatio = 'resize___aspectRatio',
	resize___originalName = 'resize___originalName'
}

export type ImageSharpFilterInput = {
	id?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	children?: Maybe<NodeFilterListInput>
	internal?: Maybe<InternalFilterInput>
	fixed?: Maybe<ImageSharpFixedFilterInput>
	resolutions?: Maybe<ImageSharpResolutionsFilterInput>
	fluid?: Maybe<ImageSharpFluidFilterInput>
	sizes?: Maybe<ImageSharpSizesFilterInput>
	original?: Maybe<ImageSharpOriginalFilterInput>
	resize?: Maybe<ImageSharpResizeFilterInput>
}

export type ImageSharpFixed = {
	__typename?: 'ImageSharpFixed'
	base64?: Maybe<Scalars['String']>
	tracedSVG?: Maybe<Scalars['String']>
	aspectRatio?: Maybe<Scalars['Float']>
	width?: Maybe<Scalars['Float']>
	height?: Maybe<Scalars['Float']>
	src?: Maybe<Scalars['String']>
	srcSet?: Maybe<Scalars['String']>
	srcWebp?: Maybe<Scalars['String']>
	srcSetWebp?: Maybe<Scalars['String']>
	originalName?: Maybe<Scalars['String']>
}

export type ImageSharpFixedFilterInput = {
	base64?: Maybe<StringQueryOperatorInput>
	tracedSVG?: Maybe<StringQueryOperatorInput>
	aspectRatio?: Maybe<FloatQueryOperatorInput>
	width?: Maybe<FloatQueryOperatorInput>
	height?: Maybe<FloatQueryOperatorInput>
	src?: Maybe<StringQueryOperatorInput>
	srcSet?: Maybe<StringQueryOperatorInput>
	srcWebp?: Maybe<StringQueryOperatorInput>
	srcSetWebp?: Maybe<StringQueryOperatorInput>
	originalName?: Maybe<StringQueryOperatorInput>
}

export type ImageSharpFluid = {
	__typename?: 'ImageSharpFluid'
	base64?: Maybe<Scalars['String']>
	tracedSVG?: Maybe<Scalars['String']>
	aspectRatio?: Maybe<Scalars['Float']>
	src?: Maybe<Scalars['String']>
	srcSet?: Maybe<Scalars['String']>
	srcWebp?: Maybe<Scalars['String']>
	srcSetWebp?: Maybe<Scalars['String']>
	sizes?: Maybe<Scalars['String']>
	originalImg?: Maybe<Scalars['String']>
	originalName?: Maybe<Scalars['String']>
	presentationWidth?: Maybe<Scalars['Int']>
	presentationHeight?: Maybe<Scalars['Int']>
}

export type ImageSharpFluidFilterInput = {
	base64?: Maybe<StringQueryOperatorInput>
	tracedSVG?: Maybe<StringQueryOperatorInput>
	aspectRatio?: Maybe<FloatQueryOperatorInput>
	src?: Maybe<StringQueryOperatorInput>
	srcSet?: Maybe<StringQueryOperatorInput>
	srcWebp?: Maybe<StringQueryOperatorInput>
	srcSetWebp?: Maybe<StringQueryOperatorInput>
	sizes?: Maybe<StringQueryOperatorInput>
	originalImg?: Maybe<StringQueryOperatorInput>
	originalName?: Maybe<StringQueryOperatorInput>
	presentationWidth?: Maybe<IntQueryOperatorInput>
	presentationHeight?: Maybe<IntQueryOperatorInput>
}

export type ImageSharpGroupConnection = {
	__typename?: 'ImageSharpGroupConnection'
	totalCount: Scalars['Int']
	edges: Array<ImageSharpEdge>
	nodes: Array<ImageSharp>
	pageInfo: PageInfo
	field: Scalars['String']
	fieldValue?: Maybe<Scalars['String']>
}

export type ImageSharpOriginal = {
	__typename?: 'ImageSharpOriginal'
	width?: Maybe<Scalars['Float']>
	height?: Maybe<Scalars['Float']>
	src?: Maybe<Scalars['String']>
}

export type ImageSharpOriginalFilterInput = {
	width?: Maybe<FloatQueryOperatorInput>
	height?: Maybe<FloatQueryOperatorInput>
	src?: Maybe<StringQueryOperatorInput>
}

export type ImageSharpResize = {
	__typename?: 'ImageSharpResize'
	src?: Maybe<Scalars['String']>
	tracedSVG?: Maybe<Scalars['String']>
	width?: Maybe<Scalars['Int']>
	height?: Maybe<Scalars['Int']>
	aspectRatio?: Maybe<Scalars['Float']>
	originalName?: Maybe<Scalars['String']>
}

export type ImageSharpResizeFilterInput = {
	src?: Maybe<StringQueryOperatorInput>
	tracedSVG?: Maybe<StringQueryOperatorInput>
	width?: Maybe<IntQueryOperatorInput>
	height?: Maybe<IntQueryOperatorInput>
	aspectRatio?: Maybe<FloatQueryOperatorInput>
	originalName?: Maybe<StringQueryOperatorInput>
}

export type ImageSharpResolutions = {
	__typename?: 'ImageSharpResolutions'
	base64?: Maybe<Scalars['String']>
	tracedSVG?: Maybe<Scalars['String']>
	aspectRatio?: Maybe<Scalars['Float']>
	width?: Maybe<Scalars['Float']>
	height?: Maybe<Scalars['Float']>
	src?: Maybe<Scalars['String']>
	srcSet?: Maybe<Scalars['String']>
	srcWebp?: Maybe<Scalars['String']>
	srcSetWebp?: Maybe<Scalars['String']>
	originalName?: Maybe<Scalars['String']>
}

export type ImageSharpResolutionsFilterInput = {
	base64?: Maybe<StringQueryOperatorInput>
	tracedSVG?: Maybe<StringQueryOperatorInput>
	aspectRatio?: Maybe<FloatQueryOperatorInput>
	width?: Maybe<FloatQueryOperatorInput>
	height?: Maybe<FloatQueryOperatorInput>
	src?: Maybe<StringQueryOperatorInput>
	srcSet?: Maybe<StringQueryOperatorInput>
	srcWebp?: Maybe<StringQueryOperatorInput>
	srcSetWebp?: Maybe<StringQueryOperatorInput>
	originalName?: Maybe<StringQueryOperatorInput>
}

export type ImageSharpSizes = {
	__typename?: 'ImageSharpSizes'
	base64?: Maybe<Scalars['String']>
	tracedSVG?: Maybe<Scalars['String']>
	aspectRatio?: Maybe<Scalars['Float']>
	src?: Maybe<Scalars['String']>
	srcSet?: Maybe<Scalars['String']>
	srcWebp?: Maybe<Scalars['String']>
	srcSetWebp?: Maybe<Scalars['String']>
	sizes?: Maybe<Scalars['String']>
	originalImg?: Maybe<Scalars['String']>
	originalName?: Maybe<Scalars['String']>
	presentationWidth?: Maybe<Scalars['Int']>
	presentationHeight?: Maybe<Scalars['Int']>
}

export type ImageSharpSizesFilterInput = {
	base64?: Maybe<StringQueryOperatorInput>
	tracedSVG?: Maybe<StringQueryOperatorInput>
	aspectRatio?: Maybe<FloatQueryOperatorInput>
	src?: Maybe<StringQueryOperatorInput>
	srcSet?: Maybe<StringQueryOperatorInput>
	srcWebp?: Maybe<StringQueryOperatorInput>
	srcSetWebp?: Maybe<StringQueryOperatorInput>
	sizes?: Maybe<StringQueryOperatorInput>
	originalImg?: Maybe<StringQueryOperatorInput>
	originalName?: Maybe<StringQueryOperatorInput>
	presentationWidth?: Maybe<IntQueryOperatorInput>
	presentationHeight?: Maybe<IntQueryOperatorInput>
}

export type ImageSharpSortInput = {
	fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>
	order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type Internal = {
	__typename?: 'Internal'
	content?: Maybe<Scalars['String']>
	contentDigest: Scalars['String']
	description?: Maybe<Scalars['String']>
	fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>
	ignoreType?: Maybe<Scalars['Boolean']>
	mediaType?: Maybe<Scalars['String']>
	owner: Scalars['String']
	type: Scalars['String']
}

export type InternalFilterInput = {
	content?: Maybe<StringQueryOperatorInput>
	contentDigest?: Maybe<StringQueryOperatorInput>
	description?: Maybe<StringQueryOperatorInput>
	fieldOwners?: Maybe<StringQueryOperatorInput>
	ignoreType?: Maybe<BooleanQueryOperatorInput>
	mediaType?: Maybe<StringQueryOperatorInput>
	owner?: Maybe<StringQueryOperatorInput>
	type?: Maybe<StringQueryOperatorInput>
}

export type IntQueryOperatorInput = {
	eq?: Maybe<Scalars['Int']>
	ne?: Maybe<Scalars['Int']>
	gt?: Maybe<Scalars['Int']>
	gte?: Maybe<Scalars['Int']>
	lt?: Maybe<Scalars['Int']>
	lte?: Maybe<Scalars['Int']>
	in?: Maybe<Array<Maybe<Scalars['Int']>>>
	nin?: Maybe<Array<Maybe<Scalars['Int']>>>
}

export type JsonQueryOperatorInput = {
	eq?: Maybe<Scalars['JSON']>
	ne?: Maybe<Scalars['JSON']>
	in?: Maybe<Array<Maybe<Scalars['JSON']>>>
	nin?: Maybe<Array<Maybe<Scalars['JSON']>>>
	regex?: Maybe<Scalars['JSON']>
	glob?: Maybe<Scalars['JSON']>
}

export type MarkdownHeading = {
	__typename?: 'MarkdownHeading'
	value?: Maybe<Scalars['String']>
	depth?: Maybe<Scalars['Int']>
}

export type MarkdownHeadingFilterInput = {
	value?: Maybe<StringQueryOperatorInput>
	depth?: Maybe<IntQueryOperatorInput>
}

export type MarkdownHeadingFilterListInput = {
	elemMatch?: Maybe<MarkdownHeadingFilterInput>
}

export type MarkdownRemark = Node & {
	__typename?: 'MarkdownRemark'
	id: Scalars['ID']
	parent?: Maybe<Node>
	children: Array<Node>
	internal: Internal
	frontmatter?: Maybe<MarkdownRemarkFrontmatter>
	excerpt?: Maybe<Scalars['String']>
	rawMarkdownBody?: Maybe<Scalars['String']>
	fileAbsolutePath?: Maybe<Scalars['String']>
	html?: Maybe<Scalars['String']>
	htmlAst?: Maybe<Scalars['JSON']>
	excerptAst?: Maybe<Scalars['JSON']>
	headings?: Maybe<Array<Maybe<MarkdownHeading>>>
	timeToRead?: Maybe<Scalars['Int']>
	tableOfContents?: Maybe<Scalars['String']>
	wordCount?: Maybe<WordCount>
}

export type MarkdownRemarkExcerptArgs = {
	pruneLength?: Maybe<Scalars['Int']>
	truncate?: Maybe<Scalars['Boolean']>
	format?: Maybe<ExcerptFormats>
}

export type MarkdownRemarkExcerptAstArgs = {
	pruneLength?: Maybe<Scalars['Int']>
	truncate?: Maybe<Scalars['Boolean']>
}

export type MarkdownRemarkHeadingsArgs = {
	depth?: Maybe<HeadingLevels>
}

export type MarkdownRemarkTableOfContentsArgs = {
	pathToSlugField?: Maybe<Scalars['String']>
	maxDepth?: Maybe<Scalars['Int']>
	heading?: Maybe<Scalars['String']>
}

export type MarkdownRemarkConnection = {
	__typename?: 'MarkdownRemarkConnection'
	totalCount: Scalars['Int']
	edges: Array<MarkdownRemarkEdge>
	nodes: Array<MarkdownRemark>
	pageInfo: PageInfo
	distinct: Array<Scalars['String']>
	group: Array<MarkdownRemarkGroupConnection>
}

export type MarkdownRemarkConnectionDistinctArgs = {
	field: MarkdownRemarkFieldsEnum
}

export type MarkdownRemarkConnectionGroupArgs = {
	skip?: Maybe<Scalars['Int']>
	limit?: Maybe<Scalars['Int']>
	field: MarkdownRemarkFieldsEnum
}

export type MarkdownRemarkEdge = {
	__typename?: 'MarkdownRemarkEdge'
	next?: Maybe<MarkdownRemark>
	node: MarkdownRemark
	previous?: Maybe<MarkdownRemark>
}

export enum MarkdownRemarkFieldsEnum {
	id = 'id',
	parent___id = 'parent___id',
	parent___parent___id = 'parent___parent___id',
	parent___parent___parent___id = 'parent___parent___parent___id',
	parent___parent___parent___children = 'parent___parent___parent___children',
	parent___parent___children = 'parent___parent___children',
	parent___parent___children___id = 'parent___parent___children___id',
	parent___parent___children___children = 'parent___parent___children___children',
	parent___parent___internal___content = 'parent___parent___internal___content',
	parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
	parent___parent___internal___description = 'parent___parent___internal___description',
	parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
	parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
	parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
	parent___parent___internal___owner = 'parent___parent___internal___owner',
	parent___parent___internal___type = 'parent___parent___internal___type',
	parent___children = 'parent___children',
	parent___children___id = 'parent___children___id',
	parent___children___parent___id = 'parent___children___parent___id',
	parent___children___parent___children = 'parent___children___parent___children',
	parent___children___children = 'parent___children___children',
	parent___children___children___id = 'parent___children___children___id',
	parent___children___children___children = 'parent___children___children___children',
	parent___children___internal___content = 'parent___children___internal___content',
	parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
	parent___children___internal___description = 'parent___children___internal___description',
	parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
	parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
	parent___children___internal___mediaType = 'parent___children___internal___mediaType',
	parent___children___internal___owner = 'parent___children___internal___owner',
	parent___children___internal___type = 'parent___children___internal___type',
	parent___internal___content = 'parent___internal___content',
	parent___internal___contentDigest = 'parent___internal___contentDigest',
	parent___internal___description = 'parent___internal___description',
	parent___internal___fieldOwners = 'parent___internal___fieldOwners',
	parent___internal___ignoreType = 'parent___internal___ignoreType',
	parent___internal___mediaType = 'parent___internal___mediaType',
	parent___internal___owner = 'parent___internal___owner',
	parent___internal___type = 'parent___internal___type',
	children = 'children',
	children___id = 'children___id',
	children___parent___id = 'children___parent___id',
	children___parent___parent___id = 'children___parent___parent___id',
	children___parent___parent___children = 'children___parent___parent___children',
	children___parent___children = 'children___parent___children',
	children___parent___children___id = 'children___parent___children___id',
	children___parent___children___children = 'children___parent___children___children',
	children___parent___internal___content = 'children___parent___internal___content',
	children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
	children___parent___internal___description = 'children___parent___internal___description',
	children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
	children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
	children___parent___internal___mediaType = 'children___parent___internal___mediaType',
	children___parent___internal___owner = 'children___parent___internal___owner',
	children___parent___internal___type = 'children___parent___internal___type',
	children___children = 'children___children',
	children___children___id = 'children___children___id',
	children___children___parent___id = 'children___children___parent___id',
	children___children___parent___children = 'children___children___parent___children',
	children___children___children = 'children___children___children',
	children___children___children___id = 'children___children___children___id',
	children___children___children___children = 'children___children___children___children',
	children___children___internal___content = 'children___children___internal___content',
	children___children___internal___contentDigest = 'children___children___internal___contentDigest',
	children___children___internal___description = 'children___children___internal___description',
	children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
	children___children___internal___ignoreType = 'children___children___internal___ignoreType',
	children___children___internal___mediaType = 'children___children___internal___mediaType',
	children___children___internal___owner = 'children___children___internal___owner',
	children___children___internal___type = 'children___children___internal___type',
	children___internal___content = 'children___internal___content',
	children___internal___contentDigest = 'children___internal___contentDigest',
	children___internal___description = 'children___internal___description',
	children___internal___fieldOwners = 'children___internal___fieldOwners',
	children___internal___ignoreType = 'children___internal___ignoreType',
	children___internal___mediaType = 'children___internal___mediaType',
	children___internal___owner = 'children___internal___owner',
	children___internal___type = 'children___internal___type',
	internal___content = 'internal___content',
	internal___contentDigest = 'internal___contentDigest',
	internal___description = 'internal___description',
	internal___fieldOwners = 'internal___fieldOwners',
	internal___ignoreType = 'internal___ignoreType',
	internal___mediaType = 'internal___mediaType',
	internal___owner = 'internal___owner',
	internal___type = 'internal___type',
	frontmatter___title = 'frontmatter___title',
	frontmatter___published = 'frontmatter___published',
	frontmatter___category = 'frontmatter___category',
	frontmatter___tags = 'frontmatter___tags',
	frontmatter___featured = 'frontmatter___featured',
	excerpt = 'excerpt',
	rawMarkdownBody = 'rawMarkdownBody',
	fileAbsolutePath = 'fileAbsolutePath',
	html = 'html',
	htmlAst = 'htmlAst',
	excerptAst = 'excerptAst',
	headings = 'headings',
	headings___value = 'headings___value',
	headings___depth = 'headings___depth',
	timeToRead = 'timeToRead',
	tableOfContents = 'tableOfContents',
	wordCount___paragraphs = 'wordCount___paragraphs',
	wordCount___sentences = 'wordCount___sentences',
	wordCount___words = 'wordCount___words'
}

export type MarkdownRemarkFilterInput = {
	id?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	children?: Maybe<NodeFilterListInput>
	internal?: Maybe<InternalFilterInput>
	frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>
	excerpt?: Maybe<StringQueryOperatorInput>
	rawMarkdownBody?: Maybe<StringQueryOperatorInput>
	fileAbsolutePath?: Maybe<StringQueryOperatorInput>
	html?: Maybe<StringQueryOperatorInput>
	htmlAst?: Maybe<JsonQueryOperatorInput>
	excerptAst?: Maybe<JsonQueryOperatorInput>
	headings?: Maybe<MarkdownHeadingFilterListInput>
	timeToRead?: Maybe<IntQueryOperatorInput>
	tableOfContents?: Maybe<StringQueryOperatorInput>
	wordCount?: Maybe<WordCountFilterInput>
}

export type MarkdownRemarkFrontmatter = {
	__typename?: 'MarkdownRemarkFrontmatter'
	title?: Maybe<Scalars['String']>
	published?: Maybe<Scalars['Boolean']>
	category?: Maybe<Scalars['String']>
	tags?: Maybe<Array<Maybe<Scalars['String']>>>
	featured?: Maybe<Scalars['Boolean']>
}

export type MarkdownRemarkFrontmatterFilterInput = {
	title?: Maybe<StringQueryOperatorInput>
	published?: Maybe<BooleanQueryOperatorInput>
	category?: Maybe<StringQueryOperatorInput>
	tags?: Maybe<StringQueryOperatorInput>
	featured?: Maybe<BooleanQueryOperatorInput>
}

export type MarkdownRemarkGroupConnection = {
	__typename?: 'MarkdownRemarkGroupConnection'
	totalCount: Scalars['Int']
	edges: Array<MarkdownRemarkEdge>
	nodes: Array<MarkdownRemark>
	pageInfo: PageInfo
	field: Scalars['String']
	fieldValue?: Maybe<Scalars['String']>
}

export type MarkdownRemarkSortInput = {
	fields?: Maybe<Array<Maybe<MarkdownRemarkFieldsEnum>>>
	order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

/** Node Interface */
export type Node = {
	id: Scalars['ID']
	parent?: Maybe<Node>
	children: Array<Node>
	internal: Internal
}

export type NodeFilterInput = {
	id?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	children?: Maybe<NodeFilterListInput>
	internal?: Maybe<InternalFilterInput>
}

export type NodeFilterListInput = {
	elemMatch?: Maybe<NodeFilterInput>
}

export type PageInfo = {
	__typename?: 'PageInfo'
	currentPage: Scalars['Int']
	hasPreviousPage: Scalars['Boolean']
	hasNextPage: Scalars['Boolean']
	itemCount: Scalars['Int']
	pageCount: Scalars['Int']
	perPage?: Maybe<Scalars['Int']>
}

export type Potrace = {
	turnPolicy?: Maybe<PotraceTurnPolicy>
	turdSize?: Maybe<Scalars['Float']>
	alphaMax?: Maybe<Scalars['Float']>
	optCurve?: Maybe<Scalars['Boolean']>
	optTolerance?: Maybe<Scalars['Float']>
	threshold?: Maybe<Scalars['Int']>
	blackOnWhite?: Maybe<Scalars['Boolean']>
	color?: Maybe<Scalars['String']>
	background?: Maybe<Scalars['String']>
}

export enum PotraceTurnPolicy {
	TURNPOLICY_BLACK = 'TURNPOLICY_BLACK',
	TURNPOLICY_WHITE = 'TURNPOLICY_WHITE',
	TURNPOLICY_LEFT = 'TURNPOLICY_LEFT',
	TURNPOLICY_RIGHT = 'TURNPOLICY_RIGHT',
	TURNPOLICY_MINORITY = 'TURNPOLICY_MINORITY',
	TURNPOLICY_MAJORITY = 'TURNPOLICY_MAJORITY'
}

export type Query = {
	__typename?: 'Query'
	file?: Maybe<File>
	allFile?: Maybe<FileConnection>
	sitePage?: Maybe<SitePage>
	allSitePage?: Maybe<SitePageConnection>
	sitePlugin?: Maybe<SitePlugin>
	allSitePlugin?: Maybe<SitePluginConnection>
	site?: Maybe<Site>
	allSite?: Maybe<SiteConnection>
	directory?: Maybe<Directory>
	allDirectory?: Maybe<DirectoryConnection>
	imageSharp?: Maybe<ImageSharp>
	allImageSharp?: Maybe<ImageSharpConnection>
	markdownRemark?: Maybe<MarkdownRemark>
	allMarkdownRemark?: Maybe<MarkdownRemarkConnection>
}

export type QueryFileArgs = {
	id?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	children?: Maybe<NodeFilterListInput>
	internal?: Maybe<InternalFilterInput>
	sourceInstanceName?: Maybe<StringQueryOperatorInput>
	absolutePath?: Maybe<StringQueryOperatorInput>
	relativePath?: Maybe<StringQueryOperatorInput>
	extension?: Maybe<StringQueryOperatorInput>
	size?: Maybe<IntQueryOperatorInput>
	prettySize?: Maybe<StringQueryOperatorInput>
	modifiedTime?: Maybe<DateQueryOperatorInput>
	accessTime?: Maybe<DateQueryOperatorInput>
	changeTime?: Maybe<DateQueryOperatorInput>
	birthTime?: Maybe<DateQueryOperatorInput>
	root?: Maybe<StringQueryOperatorInput>
	dir?: Maybe<StringQueryOperatorInput>
	base?: Maybe<StringQueryOperatorInput>
	ext?: Maybe<StringQueryOperatorInput>
	name?: Maybe<StringQueryOperatorInput>
	relativeDirectory?: Maybe<StringQueryOperatorInput>
	dev?: Maybe<FloatQueryOperatorInput>
	mode?: Maybe<IntQueryOperatorInput>
	nlink?: Maybe<IntQueryOperatorInput>
	uid?: Maybe<IntQueryOperatorInput>
	gid?: Maybe<IntQueryOperatorInput>
	rdev?: Maybe<IntQueryOperatorInput>
	ino?: Maybe<FloatQueryOperatorInput>
	atimeMs?: Maybe<FloatQueryOperatorInput>
	mtimeMs?: Maybe<FloatQueryOperatorInput>
	ctimeMs?: Maybe<FloatQueryOperatorInput>
	birthtimeMs?: Maybe<FloatQueryOperatorInput>
	atime?: Maybe<DateQueryOperatorInput>
	mtime?: Maybe<DateQueryOperatorInput>
	ctime?: Maybe<DateQueryOperatorInput>
	birthtime?: Maybe<DateQueryOperatorInput>
	publicURL?: Maybe<StringQueryOperatorInput>
}

export type QueryAllFileArgs = {
	filter?: Maybe<FileFilterInput>
	sort?: Maybe<FileSortInput>
	skip?: Maybe<Scalars['Int']>
	limit?: Maybe<Scalars['Int']>
}

export type QuerySitePageArgs = {
	id?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	children?: Maybe<NodeFilterListInput>
	internal?: Maybe<InternalFilterInput>
	path?: Maybe<StringQueryOperatorInput>
	internalComponentName?: Maybe<StringQueryOperatorInput>
	component?: Maybe<StringQueryOperatorInput>
	componentChunkName?: Maybe<StringQueryOperatorInput>
	isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>
	context?: Maybe<SitePageContextFilterInput>
	pluginCreator?: Maybe<SitePluginFilterInput>
	pluginCreatorId?: Maybe<StringQueryOperatorInput>
	componentPath?: Maybe<StringQueryOperatorInput>
}

export type QueryAllSitePageArgs = {
	filter?: Maybe<SitePageFilterInput>
	sort?: Maybe<SitePageSortInput>
	skip?: Maybe<Scalars['Int']>
	limit?: Maybe<Scalars['Int']>
}

export type QuerySitePluginArgs = {
	id?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	children?: Maybe<NodeFilterListInput>
	internal?: Maybe<InternalFilterInput>
	resolve?: Maybe<StringQueryOperatorInput>
	name?: Maybe<StringQueryOperatorInput>
	version?: Maybe<StringQueryOperatorInput>
	pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>
	nodeAPIs?: Maybe<StringQueryOperatorInput>
	browserAPIs?: Maybe<StringQueryOperatorInput>
	ssrAPIs?: Maybe<StringQueryOperatorInput>
	pluginFilepath?: Maybe<StringQueryOperatorInput>
	packageJson?: Maybe<SitePluginPackageJsonFilterInput>
}

export type QueryAllSitePluginArgs = {
	filter?: Maybe<SitePluginFilterInput>
	sort?: Maybe<SitePluginSortInput>
	skip?: Maybe<Scalars['Int']>
	limit?: Maybe<Scalars['Int']>
}

export type QuerySiteArgs = {
	id?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	children?: Maybe<NodeFilterListInput>
	internal?: Maybe<InternalFilterInput>
	siteMetadata?: Maybe<SiteSiteMetadataFilterInput>
	port?: Maybe<IntQueryOperatorInput>
	host?: Maybe<StringQueryOperatorInput>
	pathPrefix?: Maybe<StringQueryOperatorInput>
	mapping?: Maybe<SiteMappingFilterInput>
	polyfill?: Maybe<BooleanQueryOperatorInput>
	buildTime?: Maybe<DateQueryOperatorInput>
}

export type QueryAllSiteArgs = {
	filter?: Maybe<SiteFilterInput>
	sort?: Maybe<SiteSortInput>
	skip?: Maybe<Scalars['Int']>
	limit?: Maybe<Scalars['Int']>
}

export type QueryDirectoryArgs = {
	id?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	children?: Maybe<NodeFilterListInput>
	internal?: Maybe<InternalFilterInput>
	sourceInstanceName?: Maybe<StringQueryOperatorInput>
	absolutePath?: Maybe<StringQueryOperatorInput>
	relativePath?: Maybe<StringQueryOperatorInput>
	extension?: Maybe<StringQueryOperatorInput>
	size?: Maybe<IntQueryOperatorInput>
	prettySize?: Maybe<StringQueryOperatorInput>
	modifiedTime?: Maybe<DateQueryOperatorInput>
	accessTime?: Maybe<DateQueryOperatorInput>
	changeTime?: Maybe<DateQueryOperatorInput>
	birthTime?: Maybe<DateQueryOperatorInput>
	root?: Maybe<StringQueryOperatorInput>
	dir?: Maybe<StringQueryOperatorInput>
	base?: Maybe<StringQueryOperatorInput>
	ext?: Maybe<StringQueryOperatorInput>
	name?: Maybe<StringQueryOperatorInput>
	relativeDirectory?: Maybe<StringQueryOperatorInput>
	dev?: Maybe<FloatQueryOperatorInput>
	mode?: Maybe<IntQueryOperatorInput>
	nlink?: Maybe<IntQueryOperatorInput>
	uid?: Maybe<IntQueryOperatorInput>
	gid?: Maybe<IntQueryOperatorInput>
	rdev?: Maybe<IntQueryOperatorInput>
	ino?: Maybe<FloatQueryOperatorInput>
	atimeMs?: Maybe<FloatQueryOperatorInput>
	mtimeMs?: Maybe<FloatQueryOperatorInput>
	ctimeMs?: Maybe<FloatQueryOperatorInput>
	birthtimeMs?: Maybe<FloatQueryOperatorInput>
	atime?: Maybe<DateQueryOperatorInput>
	mtime?: Maybe<DateQueryOperatorInput>
	ctime?: Maybe<DateQueryOperatorInput>
	birthtime?: Maybe<DateQueryOperatorInput>
}

export type QueryAllDirectoryArgs = {
	filter?: Maybe<DirectoryFilterInput>
	sort?: Maybe<DirectorySortInput>
	skip?: Maybe<Scalars['Int']>
	limit?: Maybe<Scalars['Int']>
}

export type QueryImageSharpArgs = {
	id?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	children?: Maybe<NodeFilterListInput>
	internal?: Maybe<InternalFilterInput>
	fixed?: Maybe<ImageSharpFixedFilterInput>
	resolutions?: Maybe<ImageSharpResolutionsFilterInput>
	fluid?: Maybe<ImageSharpFluidFilterInput>
	sizes?: Maybe<ImageSharpSizesFilterInput>
	original?: Maybe<ImageSharpOriginalFilterInput>
	resize?: Maybe<ImageSharpResizeFilterInput>
}

export type QueryAllImageSharpArgs = {
	filter?: Maybe<ImageSharpFilterInput>
	sort?: Maybe<ImageSharpSortInput>
	skip?: Maybe<Scalars['Int']>
	limit?: Maybe<Scalars['Int']>
}

export type QueryMarkdownRemarkArgs = {
	id?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	children?: Maybe<NodeFilterListInput>
	internal?: Maybe<InternalFilterInput>
	frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>
	excerpt?: Maybe<StringQueryOperatorInput>
	rawMarkdownBody?: Maybe<StringQueryOperatorInput>
	fileAbsolutePath?: Maybe<StringQueryOperatorInput>
	html?: Maybe<StringQueryOperatorInput>
	htmlAst?: Maybe<JsonQueryOperatorInput>
	excerptAst?: Maybe<JsonQueryOperatorInput>
	headings?: Maybe<MarkdownHeadingFilterListInput>
	timeToRead?: Maybe<IntQueryOperatorInput>
	tableOfContents?: Maybe<StringQueryOperatorInput>
	wordCount?: Maybe<WordCountFilterInput>
}

export type QueryAllMarkdownRemarkArgs = {
	filter?: Maybe<MarkdownRemarkFilterInput>
	sort?: Maybe<MarkdownRemarkSortInput>
	skip?: Maybe<Scalars['Int']>
	limit?: Maybe<Scalars['Int']>
}

export type Site = Node & {
	__typename?: 'Site'
	id: Scalars['ID']
	parent?: Maybe<Node>
	children: Array<Node>
	internal: Internal
	siteMetadata?: Maybe<SiteSiteMetadata>
	port?: Maybe<Scalars['Int']>
	host?: Maybe<Scalars['String']>
	pathPrefix?: Maybe<Scalars['String']>
	mapping?: Maybe<SiteMapping>
	polyfill?: Maybe<Scalars['Boolean']>
	buildTime?: Maybe<Scalars['Date']>
}

export type SiteBuildTimeArgs = {
	formatString?: Maybe<Scalars['String']>
	fromNow?: Maybe<Scalars['Boolean']>
	difference?: Maybe<Scalars['String']>
	locale?: Maybe<Scalars['String']>
}

export type SiteConnection = {
	__typename?: 'SiteConnection'
	totalCount: Scalars['Int']
	edges: Array<SiteEdge>
	nodes: Array<Site>
	pageInfo: PageInfo
	distinct: Array<Scalars['String']>
	group: Array<SiteGroupConnection>
}

export type SiteConnectionDistinctArgs = {
	field: SiteFieldsEnum
}

export type SiteConnectionGroupArgs = {
	skip?: Maybe<Scalars['Int']>
	limit?: Maybe<Scalars['Int']>
	field: SiteFieldsEnum
}

export type SiteEdge = {
	__typename?: 'SiteEdge'
	next?: Maybe<Site>
	node: Site
	previous?: Maybe<Site>
}

export enum SiteFieldsEnum {
	id = 'id',
	parent___id = 'parent___id',
	parent___parent___id = 'parent___parent___id',
	parent___parent___parent___id = 'parent___parent___parent___id',
	parent___parent___parent___children = 'parent___parent___parent___children',
	parent___parent___children = 'parent___parent___children',
	parent___parent___children___id = 'parent___parent___children___id',
	parent___parent___children___children = 'parent___parent___children___children',
	parent___parent___internal___content = 'parent___parent___internal___content',
	parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
	parent___parent___internal___description = 'parent___parent___internal___description',
	parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
	parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
	parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
	parent___parent___internal___owner = 'parent___parent___internal___owner',
	parent___parent___internal___type = 'parent___parent___internal___type',
	parent___children = 'parent___children',
	parent___children___id = 'parent___children___id',
	parent___children___parent___id = 'parent___children___parent___id',
	parent___children___parent___children = 'parent___children___parent___children',
	parent___children___children = 'parent___children___children',
	parent___children___children___id = 'parent___children___children___id',
	parent___children___children___children = 'parent___children___children___children',
	parent___children___internal___content = 'parent___children___internal___content',
	parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
	parent___children___internal___description = 'parent___children___internal___description',
	parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
	parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
	parent___children___internal___mediaType = 'parent___children___internal___mediaType',
	parent___children___internal___owner = 'parent___children___internal___owner',
	parent___children___internal___type = 'parent___children___internal___type',
	parent___internal___content = 'parent___internal___content',
	parent___internal___contentDigest = 'parent___internal___contentDigest',
	parent___internal___description = 'parent___internal___description',
	parent___internal___fieldOwners = 'parent___internal___fieldOwners',
	parent___internal___ignoreType = 'parent___internal___ignoreType',
	parent___internal___mediaType = 'parent___internal___mediaType',
	parent___internal___owner = 'parent___internal___owner',
	parent___internal___type = 'parent___internal___type',
	children = 'children',
	children___id = 'children___id',
	children___parent___id = 'children___parent___id',
	children___parent___parent___id = 'children___parent___parent___id',
	children___parent___parent___children = 'children___parent___parent___children',
	children___parent___children = 'children___parent___children',
	children___parent___children___id = 'children___parent___children___id',
	children___parent___children___children = 'children___parent___children___children',
	children___parent___internal___content = 'children___parent___internal___content',
	children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
	children___parent___internal___description = 'children___parent___internal___description',
	children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
	children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
	children___parent___internal___mediaType = 'children___parent___internal___mediaType',
	children___parent___internal___owner = 'children___parent___internal___owner',
	children___parent___internal___type = 'children___parent___internal___type',
	children___children = 'children___children',
	children___children___id = 'children___children___id',
	children___children___parent___id = 'children___children___parent___id',
	children___children___parent___children = 'children___children___parent___children',
	children___children___children = 'children___children___children',
	children___children___children___id = 'children___children___children___id',
	children___children___children___children = 'children___children___children___children',
	children___children___internal___content = 'children___children___internal___content',
	children___children___internal___contentDigest = 'children___children___internal___contentDigest',
	children___children___internal___description = 'children___children___internal___description',
	children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
	children___children___internal___ignoreType = 'children___children___internal___ignoreType',
	children___children___internal___mediaType = 'children___children___internal___mediaType',
	children___children___internal___owner = 'children___children___internal___owner',
	children___children___internal___type = 'children___children___internal___type',
	children___internal___content = 'children___internal___content',
	children___internal___contentDigest = 'children___internal___contentDigest',
	children___internal___description = 'children___internal___description',
	children___internal___fieldOwners = 'children___internal___fieldOwners',
	children___internal___ignoreType = 'children___internal___ignoreType',
	children___internal___mediaType = 'children___internal___mediaType',
	children___internal___owner = 'children___internal___owner',
	children___internal___type = 'children___internal___type',
	internal___content = 'internal___content',
	internal___contentDigest = 'internal___contentDigest',
	internal___description = 'internal___description',
	internal___fieldOwners = 'internal___fieldOwners',
	internal___ignoreType = 'internal___ignoreType',
	internal___mediaType = 'internal___mediaType',
	internal___owner = 'internal___owner',
	internal___type = 'internal___type',
	siteMetadata___title = 'siteMetadata___title',
	siteMetadata___author = 'siteMetadata___author',
	siteMetadata___description = 'siteMetadata___description',
	siteMetadata___siteUrl = 'siteMetadata___siteUrl',
	port = 'port',
	host = 'host',
	pathPrefix = 'pathPrefix',
	mapping___MarkdownRemark_frontmatter_author = 'mapping___MarkdownRemark_frontmatter_author',
	polyfill = 'polyfill',
	buildTime = 'buildTime'
}

export type SiteFilterInput = {
	id?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	children?: Maybe<NodeFilterListInput>
	internal?: Maybe<InternalFilterInput>
	siteMetadata?: Maybe<SiteSiteMetadataFilterInput>
	port?: Maybe<IntQueryOperatorInput>
	host?: Maybe<StringQueryOperatorInput>
	pathPrefix?: Maybe<StringQueryOperatorInput>
	mapping?: Maybe<SiteMappingFilterInput>
	polyfill?: Maybe<BooleanQueryOperatorInput>
	buildTime?: Maybe<DateQueryOperatorInput>
}

export type SiteGroupConnection = {
	__typename?: 'SiteGroupConnection'
	totalCount: Scalars['Int']
	edges: Array<SiteEdge>
	nodes: Array<Site>
	pageInfo: PageInfo
	field: Scalars['String']
	fieldValue?: Maybe<Scalars['String']>
}

export type SiteMapping = {
	__typename?: 'SiteMapping'
	MarkdownRemark_frontmatter_author?: Maybe<Scalars['String']>
}

export type SiteMappingFilterInput = {
	MarkdownRemark_frontmatter_author?: Maybe<StringQueryOperatorInput>
}

export type SitePage = Node & {
	__typename?: 'SitePage'
	id: Scalars['ID']
	parent?: Maybe<Node>
	children: Array<Node>
	internal: Internal
	path?: Maybe<Scalars['String']>
	internalComponentName?: Maybe<Scalars['String']>
	component?: Maybe<Scalars['String']>
	componentChunkName?: Maybe<Scalars['String']>
	isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>
	context?: Maybe<SitePageContext>
	pluginCreator?: Maybe<SitePlugin>
	pluginCreatorId?: Maybe<Scalars['String']>
	componentPath?: Maybe<Scalars['String']>
}

export type SitePageConnection = {
	__typename?: 'SitePageConnection'
	totalCount: Scalars['Int']
	edges: Array<SitePageEdge>
	nodes: Array<SitePage>
	pageInfo: PageInfo
	distinct: Array<Scalars['String']>
	group: Array<SitePageGroupConnection>
}

export type SitePageConnectionDistinctArgs = {
	field: SitePageFieldsEnum
}

export type SitePageConnectionGroupArgs = {
	skip?: Maybe<Scalars['Int']>
	limit?: Maybe<Scalars['Int']>
	field: SitePageFieldsEnum
}

export type SitePageContext = {
	__typename?: 'SitePageContext'
	previous?: Maybe<SitePageContextPrevious>
	next?: Maybe<SitePageContextNext>
	date?: Maybe<Scalars['String']>
	title?: Maybe<Scalars['String']>
	relativeDirectory?: Maybe<Scalars['String']>
}

export type SitePageContextFilterInput = {
	previous?: Maybe<SitePageContextPreviousFilterInput>
	next?: Maybe<SitePageContextNextFilterInput>
	date?: Maybe<StringQueryOperatorInput>
	title?: Maybe<StringQueryOperatorInput>
	relativeDirectory?: Maybe<StringQueryOperatorInput>
}

export type SitePageContextNext = {
	__typename?: 'SitePageContextNext'
	relativeDirectory?: Maybe<Scalars['String']>
}

export type SitePageContextNextFilterInput = {
	relativeDirectory?: Maybe<StringQueryOperatorInput>
}

export type SitePageContextPrevious = {
	__typename?: 'SitePageContextPrevious'
	relativeDirectory?: Maybe<Scalars['String']>
}

export type SitePageContextPreviousFilterInput = {
	relativeDirectory?: Maybe<StringQueryOperatorInput>
}

export type SitePageEdge = {
	__typename?: 'SitePageEdge'
	next?: Maybe<SitePage>
	node: SitePage
	previous?: Maybe<SitePage>
}

export enum SitePageFieldsEnum {
	id = 'id',
	parent___id = 'parent___id',
	parent___parent___id = 'parent___parent___id',
	parent___parent___parent___id = 'parent___parent___parent___id',
	parent___parent___parent___children = 'parent___parent___parent___children',
	parent___parent___children = 'parent___parent___children',
	parent___parent___children___id = 'parent___parent___children___id',
	parent___parent___children___children = 'parent___parent___children___children',
	parent___parent___internal___content = 'parent___parent___internal___content',
	parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
	parent___parent___internal___description = 'parent___parent___internal___description',
	parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
	parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
	parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
	parent___parent___internal___owner = 'parent___parent___internal___owner',
	parent___parent___internal___type = 'parent___parent___internal___type',
	parent___children = 'parent___children',
	parent___children___id = 'parent___children___id',
	parent___children___parent___id = 'parent___children___parent___id',
	parent___children___parent___children = 'parent___children___parent___children',
	parent___children___children = 'parent___children___children',
	parent___children___children___id = 'parent___children___children___id',
	parent___children___children___children = 'parent___children___children___children',
	parent___children___internal___content = 'parent___children___internal___content',
	parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
	parent___children___internal___description = 'parent___children___internal___description',
	parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
	parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
	parent___children___internal___mediaType = 'parent___children___internal___mediaType',
	parent___children___internal___owner = 'parent___children___internal___owner',
	parent___children___internal___type = 'parent___children___internal___type',
	parent___internal___content = 'parent___internal___content',
	parent___internal___contentDigest = 'parent___internal___contentDigest',
	parent___internal___description = 'parent___internal___description',
	parent___internal___fieldOwners = 'parent___internal___fieldOwners',
	parent___internal___ignoreType = 'parent___internal___ignoreType',
	parent___internal___mediaType = 'parent___internal___mediaType',
	parent___internal___owner = 'parent___internal___owner',
	parent___internal___type = 'parent___internal___type',
	children = 'children',
	children___id = 'children___id',
	children___parent___id = 'children___parent___id',
	children___parent___parent___id = 'children___parent___parent___id',
	children___parent___parent___children = 'children___parent___parent___children',
	children___parent___children = 'children___parent___children',
	children___parent___children___id = 'children___parent___children___id',
	children___parent___children___children = 'children___parent___children___children',
	children___parent___internal___content = 'children___parent___internal___content',
	children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
	children___parent___internal___description = 'children___parent___internal___description',
	children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
	children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
	children___parent___internal___mediaType = 'children___parent___internal___mediaType',
	children___parent___internal___owner = 'children___parent___internal___owner',
	children___parent___internal___type = 'children___parent___internal___type',
	children___children = 'children___children',
	children___children___id = 'children___children___id',
	children___children___parent___id = 'children___children___parent___id',
	children___children___parent___children = 'children___children___parent___children',
	children___children___children = 'children___children___children',
	children___children___children___id = 'children___children___children___id',
	children___children___children___children = 'children___children___children___children',
	children___children___internal___content = 'children___children___internal___content',
	children___children___internal___contentDigest = 'children___children___internal___contentDigest',
	children___children___internal___description = 'children___children___internal___description',
	children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
	children___children___internal___ignoreType = 'children___children___internal___ignoreType',
	children___children___internal___mediaType = 'children___children___internal___mediaType',
	children___children___internal___owner = 'children___children___internal___owner',
	children___children___internal___type = 'children___children___internal___type',
	children___internal___content = 'children___internal___content',
	children___internal___contentDigest = 'children___internal___contentDigest',
	children___internal___description = 'children___internal___description',
	children___internal___fieldOwners = 'children___internal___fieldOwners',
	children___internal___ignoreType = 'children___internal___ignoreType',
	children___internal___mediaType = 'children___internal___mediaType',
	children___internal___owner = 'children___internal___owner',
	children___internal___type = 'children___internal___type',
	internal___content = 'internal___content',
	internal___contentDigest = 'internal___contentDigest',
	internal___description = 'internal___description',
	internal___fieldOwners = 'internal___fieldOwners',
	internal___ignoreType = 'internal___ignoreType',
	internal___mediaType = 'internal___mediaType',
	internal___owner = 'internal___owner',
	internal___type = 'internal___type',
	path = 'path',
	internalComponentName = 'internalComponentName',
	component = 'component',
	componentChunkName = 'componentChunkName',
	isCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
	context___previous___relativeDirectory = 'context___previous___relativeDirectory',
	context___next___relativeDirectory = 'context___next___relativeDirectory',
	context___date = 'context___date',
	context___title = 'context___title',
	context___relativeDirectory = 'context___relativeDirectory',
	pluginCreator___id = 'pluginCreator___id',
	pluginCreator___parent___id = 'pluginCreator___parent___id',
	pluginCreator___parent___parent___id = 'pluginCreator___parent___parent___id',
	pluginCreator___parent___parent___children = 'pluginCreator___parent___parent___children',
	pluginCreator___parent___children = 'pluginCreator___parent___children',
	pluginCreator___parent___children___id = 'pluginCreator___parent___children___id',
	pluginCreator___parent___children___children = 'pluginCreator___parent___children___children',
	pluginCreator___parent___internal___content = 'pluginCreator___parent___internal___content',
	pluginCreator___parent___internal___contentDigest = 'pluginCreator___parent___internal___contentDigest',
	pluginCreator___parent___internal___description = 'pluginCreator___parent___internal___description',
	pluginCreator___parent___internal___fieldOwners = 'pluginCreator___parent___internal___fieldOwners',
	pluginCreator___parent___internal___ignoreType = 'pluginCreator___parent___internal___ignoreType',
	pluginCreator___parent___internal___mediaType = 'pluginCreator___parent___internal___mediaType',
	pluginCreator___parent___internal___owner = 'pluginCreator___parent___internal___owner',
	pluginCreator___parent___internal___type = 'pluginCreator___parent___internal___type',
	pluginCreator___children = 'pluginCreator___children',
	pluginCreator___children___id = 'pluginCreator___children___id',
	pluginCreator___children___parent___id = 'pluginCreator___children___parent___id',
	pluginCreator___children___parent___children = 'pluginCreator___children___parent___children',
	pluginCreator___children___children = 'pluginCreator___children___children',
	pluginCreator___children___children___id = 'pluginCreator___children___children___id',
	pluginCreator___children___children___children = 'pluginCreator___children___children___children',
	pluginCreator___children___internal___content = 'pluginCreator___children___internal___content',
	pluginCreator___children___internal___contentDigest = 'pluginCreator___children___internal___contentDigest',
	pluginCreator___children___internal___description = 'pluginCreator___children___internal___description',
	pluginCreator___children___internal___fieldOwners = 'pluginCreator___children___internal___fieldOwners',
	pluginCreator___children___internal___ignoreType = 'pluginCreator___children___internal___ignoreType',
	pluginCreator___children___internal___mediaType = 'pluginCreator___children___internal___mediaType',
	pluginCreator___children___internal___owner = 'pluginCreator___children___internal___owner',
	pluginCreator___children___internal___type = 'pluginCreator___children___internal___type',
	pluginCreator___internal___content = 'pluginCreator___internal___content',
	pluginCreator___internal___contentDigest = 'pluginCreator___internal___contentDigest',
	pluginCreator___internal___description = 'pluginCreator___internal___description',
	pluginCreator___internal___fieldOwners = 'pluginCreator___internal___fieldOwners',
	pluginCreator___internal___ignoreType = 'pluginCreator___internal___ignoreType',
	pluginCreator___internal___mediaType = 'pluginCreator___internal___mediaType',
	pluginCreator___internal___owner = 'pluginCreator___internal___owner',
	pluginCreator___internal___type = 'pluginCreator___internal___type',
	pluginCreator___resolve = 'pluginCreator___resolve',
	pluginCreator___name = 'pluginCreator___name',
	pluginCreator___version = 'pluginCreator___version',
	pluginCreator___pluginOptions___plugins = 'pluginCreator___pluginOptions___plugins',
	pluginCreator___pluginOptions___plugins___resolve = 'pluginCreator___pluginOptions___plugins___resolve',
	pluginCreator___pluginOptions___plugins___id = 'pluginCreator___pluginOptions___plugins___id',
	pluginCreator___pluginOptions___plugins___name = 'pluginCreator___pluginOptions___plugins___name',
	pluginCreator___pluginOptions___plugins___version = 'pluginCreator___pluginOptions___plugins___version',
	pluginCreator___pluginOptions___plugins___pluginFilepath = 'pluginCreator___pluginOptions___plugins___pluginFilepath',
	pluginCreator___pluginOptions___name = 'pluginCreator___pluginOptions___name',
	pluginCreator___pluginOptions___path = 'pluginCreator___pluginOptions___path',
	pluginCreator___pluginOptions___short_name = 'pluginCreator___pluginOptions___short_name',
	pluginCreator___pluginOptions___start_url = 'pluginCreator___pluginOptions___start_url',
	pluginCreator___pluginOptions___background_color = 'pluginCreator___pluginOptions___background_color',
	pluginCreator___pluginOptions___theme_color = 'pluginCreator___pluginOptions___theme_color',
	pluginCreator___pluginOptions___display = 'pluginCreator___pluginOptions___display',
	pluginCreator___pluginOptions___icon = 'pluginCreator___pluginOptions___icon',
	pluginCreator___pluginOptions___isTSX = 'pluginCreator___pluginOptions___isTSX',
	pluginCreator___pluginOptions___allExtensions = 'pluginCreator___pluginOptions___allExtensions',
	pluginCreator___pluginOptions___color = 'pluginCreator___pluginOptions___color',
	pluginCreator___pluginOptions___showSpinner = 'pluginCreator___pluginOptions___showSpinner',
	pluginCreator___pluginOptions___trackingId = 'pluginCreator___pluginOptions___trackingId',
	pluginCreator___pluginOptions___pathCheck = 'pluginCreator___pluginOptions___pathCheck',
	pluginCreator___nodeAPIs = 'pluginCreator___nodeAPIs',
	pluginCreator___browserAPIs = 'pluginCreator___browserAPIs',
	pluginCreator___ssrAPIs = 'pluginCreator___ssrAPIs',
	pluginCreator___pluginFilepath = 'pluginCreator___pluginFilepath',
	pluginCreator___packageJson___name = 'pluginCreator___packageJson___name',
	pluginCreator___packageJson___description = 'pluginCreator___packageJson___description',
	pluginCreator___packageJson___version = 'pluginCreator___packageJson___version',
	pluginCreator___packageJson___main = 'pluginCreator___packageJson___main',
	pluginCreator___packageJson___license = 'pluginCreator___packageJson___license',
	pluginCreator___packageJson___dependencies = 'pluginCreator___packageJson___dependencies',
	pluginCreator___packageJson___dependencies___name = 'pluginCreator___packageJson___dependencies___name',
	pluginCreator___packageJson___dependencies___version = 'pluginCreator___packageJson___dependencies___version',
	pluginCreator___packageJson___devDependencies = 'pluginCreator___packageJson___devDependencies',
	pluginCreator___packageJson___devDependencies___name = 'pluginCreator___packageJson___devDependencies___name',
	pluginCreator___packageJson___devDependencies___version = 'pluginCreator___packageJson___devDependencies___version',
	pluginCreator___packageJson___peerDependencies = 'pluginCreator___packageJson___peerDependencies',
	pluginCreator___packageJson___peerDependencies___name = 'pluginCreator___packageJson___peerDependencies___name',
	pluginCreator___packageJson___peerDependencies___version = 'pluginCreator___packageJson___peerDependencies___version',
	pluginCreator___packageJson___keywords = 'pluginCreator___packageJson___keywords',
	pluginCreatorId = 'pluginCreatorId',
	componentPath = 'componentPath'
}

export type SitePageFilterInput = {
	id?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	children?: Maybe<NodeFilterListInput>
	internal?: Maybe<InternalFilterInput>
	path?: Maybe<StringQueryOperatorInput>
	internalComponentName?: Maybe<StringQueryOperatorInput>
	component?: Maybe<StringQueryOperatorInput>
	componentChunkName?: Maybe<StringQueryOperatorInput>
	isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>
	context?: Maybe<SitePageContextFilterInput>
	pluginCreator?: Maybe<SitePluginFilterInput>
	pluginCreatorId?: Maybe<StringQueryOperatorInput>
	componentPath?: Maybe<StringQueryOperatorInput>
}

export type SitePageGroupConnection = {
	__typename?: 'SitePageGroupConnection'
	totalCount: Scalars['Int']
	edges: Array<SitePageEdge>
	nodes: Array<SitePage>
	pageInfo: PageInfo
	field: Scalars['String']
	fieldValue?: Maybe<Scalars['String']>
}

export type SitePageSortInput = {
	fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>
	order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SitePlugin = Node & {
	__typename?: 'SitePlugin'
	id: Scalars['ID']
	parent?: Maybe<Node>
	children: Array<Node>
	internal: Internal
	resolve?: Maybe<Scalars['String']>
	name?: Maybe<Scalars['String']>
	version?: Maybe<Scalars['String']>
	pluginOptions?: Maybe<SitePluginPluginOptions>
	nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
	browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
	ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
	pluginFilepath?: Maybe<Scalars['String']>
	packageJson?: Maybe<SitePluginPackageJson>
}

export type SitePluginConnection = {
	__typename?: 'SitePluginConnection'
	totalCount: Scalars['Int']
	edges: Array<SitePluginEdge>
	nodes: Array<SitePlugin>
	pageInfo: PageInfo
	distinct: Array<Scalars['String']>
	group: Array<SitePluginGroupConnection>
}

export type SitePluginConnectionDistinctArgs = {
	field: SitePluginFieldsEnum
}

export type SitePluginConnectionGroupArgs = {
	skip?: Maybe<Scalars['Int']>
	limit?: Maybe<Scalars['Int']>
	field: SitePluginFieldsEnum
}

export type SitePluginEdge = {
	__typename?: 'SitePluginEdge'
	next?: Maybe<SitePlugin>
	node: SitePlugin
	previous?: Maybe<SitePlugin>
}

export enum SitePluginFieldsEnum {
	id = 'id',
	parent___id = 'parent___id',
	parent___parent___id = 'parent___parent___id',
	parent___parent___parent___id = 'parent___parent___parent___id',
	parent___parent___parent___children = 'parent___parent___parent___children',
	parent___parent___children = 'parent___parent___children',
	parent___parent___children___id = 'parent___parent___children___id',
	parent___parent___children___children = 'parent___parent___children___children',
	parent___parent___internal___content = 'parent___parent___internal___content',
	parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
	parent___parent___internal___description = 'parent___parent___internal___description',
	parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
	parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
	parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
	parent___parent___internal___owner = 'parent___parent___internal___owner',
	parent___parent___internal___type = 'parent___parent___internal___type',
	parent___children = 'parent___children',
	parent___children___id = 'parent___children___id',
	parent___children___parent___id = 'parent___children___parent___id',
	parent___children___parent___children = 'parent___children___parent___children',
	parent___children___children = 'parent___children___children',
	parent___children___children___id = 'parent___children___children___id',
	parent___children___children___children = 'parent___children___children___children',
	parent___children___internal___content = 'parent___children___internal___content',
	parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
	parent___children___internal___description = 'parent___children___internal___description',
	parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
	parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
	parent___children___internal___mediaType = 'parent___children___internal___mediaType',
	parent___children___internal___owner = 'parent___children___internal___owner',
	parent___children___internal___type = 'parent___children___internal___type',
	parent___internal___content = 'parent___internal___content',
	parent___internal___contentDigest = 'parent___internal___contentDigest',
	parent___internal___description = 'parent___internal___description',
	parent___internal___fieldOwners = 'parent___internal___fieldOwners',
	parent___internal___ignoreType = 'parent___internal___ignoreType',
	parent___internal___mediaType = 'parent___internal___mediaType',
	parent___internal___owner = 'parent___internal___owner',
	parent___internal___type = 'parent___internal___type',
	children = 'children',
	children___id = 'children___id',
	children___parent___id = 'children___parent___id',
	children___parent___parent___id = 'children___parent___parent___id',
	children___parent___parent___children = 'children___parent___parent___children',
	children___parent___children = 'children___parent___children',
	children___parent___children___id = 'children___parent___children___id',
	children___parent___children___children = 'children___parent___children___children',
	children___parent___internal___content = 'children___parent___internal___content',
	children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
	children___parent___internal___description = 'children___parent___internal___description',
	children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
	children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
	children___parent___internal___mediaType = 'children___parent___internal___mediaType',
	children___parent___internal___owner = 'children___parent___internal___owner',
	children___parent___internal___type = 'children___parent___internal___type',
	children___children = 'children___children',
	children___children___id = 'children___children___id',
	children___children___parent___id = 'children___children___parent___id',
	children___children___parent___children = 'children___children___parent___children',
	children___children___children = 'children___children___children',
	children___children___children___id = 'children___children___children___id',
	children___children___children___children = 'children___children___children___children',
	children___children___internal___content = 'children___children___internal___content',
	children___children___internal___contentDigest = 'children___children___internal___contentDigest',
	children___children___internal___description = 'children___children___internal___description',
	children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
	children___children___internal___ignoreType = 'children___children___internal___ignoreType',
	children___children___internal___mediaType = 'children___children___internal___mediaType',
	children___children___internal___owner = 'children___children___internal___owner',
	children___children___internal___type = 'children___children___internal___type',
	children___internal___content = 'children___internal___content',
	children___internal___contentDigest = 'children___internal___contentDigest',
	children___internal___description = 'children___internal___description',
	children___internal___fieldOwners = 'children___internal___fieldOwners',
	children___internal___ignoreType = 'children___internal___ignoreType',
	children___internal___mediaType = 'children___internal___mediaType',
	children___internal___owner = 'children___internal___owner',
	children___internal___type = 'children___internal___type',
	internal___content = 'internal___content',
	internal___contentDigest = 'internal___contentDigest',
	internal___description = 'internal___description',
	internal___fieldOwners = 'internal___fieldOwners',
	internal___ignoreType = 'internal___ignoreType',
	internal___mediaType = 'internal___mediaType',
	internal___owner = 'internal___owner',
	internal___type = 'internal___type',
	resolve = 'resolve',
	name = 'name',
	version = 'version',
	pluginOptions___plugins = 'pluginOptions___plugins',
	pluginOptions___plugins___resolve = 'pluginOptions___plugins___resolve',
	pluginOptions___plugins___id = 'pluginOptions___plugins___id',
	pluginOptions___plugins___name = 'pluginOptions___plugins___name',
	pluginOptions___plugins___version = 'pluginOptions___plugins___version',
	pluginOptions___plugins___pluginFilepath = 'pluginOptions___plugins___pluginFilepath',
	pluginOptions___name = 'pluginOptions___name',
	pluginOptions___path = 'pluginOptions___path',
	pluginOptions___short_name = 'pluginOptions___short_name',
	pluginOptions___start_url = 'pluginOptions___start_url',
	pluginOptions___background_color = 'pluginOptions___background_color',
	pluginOptions___theme_color = 'pluginOptions___theme_color',
	pluginOptions___display = 'pluginOptions___display',
	pluginOptions___icon = 'pluginOptions___icon',
	pluginOptions___isTSX = 'pluginOptions___isTSX',
	pluginOptions___allExtensions = 'pluginOptions___allExtensions',
	pluginOptions___color = 'pluginOptions___color',
	pluginOptions___showSpinner = 'pluginOptions___showSpinner',
	pluginOptions___trackingId = 'pluginOptions___trackingId',
	pluginOptions___pathCheck = 'pluginOptions___pathCheck',
	nodeAPIs = 'nodeAPIs',
	browserAPIs = 'browserAPIs',
	ssrAPIs = 'ssrAPIs',
	pluginFilepath = 'pluginFilepath',
	packageJson___name = 'packageJson___name',
	packageJson___description = 'packageJson___description',
	packageJson___version = 'packageJson___version',
	packageJson___main = 'packageJson___main',
	packageJson___license = 'packageJson___license',
	packageJson___dependencies = 'packageJson___dependencies',
	packageJson___dependencies___name = 'packageJson___dependencies___name',
	packageJson___dependencies___version = 'packageJson___dependencies___version',
	packageJson___devDependencies = 'packageJson___devDependencies',
	packageJson___devDependencies___name = 'packageJson___devDependencies___name',
	packageJson___devDependencies___version = 'packageJson___devDependencies___version',
	packageJson___peerDependencies = 'packageJson___peerDependencies',
	packageJson___peerDependencies___name = 'packageJson___peerDependencies___name',
	packageJson___peerDependencies___version = 'packageJson___peerDependencies___version',
	packageJson___keywords = 'packageJson___keywords'
}

export type SitePluginFilterInput = {
	id?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	children?: Maybe<NodeFilterListInput>
	internal?: Maybe<InternalFilterInput>
	resolve?: Maybe<StringQueryOperatorInput>
	name?: Maybe<StringQueryOperatorInput>
	version?: Maybe<StringQueryOperatorInput>
	pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>
	nodeAPIs?: Maybe<StringQueryOperatorInput>
	browserAPIs?: Maybe<StringQueryOperatorInput>
	ssrAPIs?: Maybe<StringQueryOperatorInput>
	pluginFilepath?: Maybe<StringQueryOperatorInput>
	packageJson?: Maybe<SitePluginPackageJsonFilterInput>
}

export type SitePluginGroupConnection = {
	__typename?: 'SitePluginGroupConnection'
	totalCount: Scalars['Int']
	edges: Array<SitePluginEdge>
	nodes: Array<SitePlugin>
	pageInfo: PageInfo
	field: Scalars['String']
	fieldValue?: Maybe<Scalars['String']>
}

export type SitePluginPackageJson = {
	__typename?: 'SitePluginPackageJson'
	name?: Maybe<Scalars['String']>
	description?: Maybe<Scalars['String']>
	version?: Maybe<Scalars['String']>
	main?: Maybe<Scalars['String']>
	license?: Maybe<Scalars['String']>
	dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>
	devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>
	peerDependencies?: Maybe<
		Array<Maybe<SitePluginPackageJsonPeerDependencies>>
	>
	keywords?: Maybe<Array<Maybe<Scalars['String']>>>
}

export type SitePluginPackageJsonDependencies = {
	__typename?: 'SitePluginPackageJsonDependencies'
	name?: Maybe<Scalars['String']>
	version?: Maybe<Scalars['String']>
}

export type SitePluginPackageJsonDependenciesFilterInput = {
	name?: Maybe<StringQueryOperatorInput>
	version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonDependenciesFilterListInput = {
	elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>
}

export type SitePluginPackageJsonDevDependencies = {
	__typename?: 'SitePluginPackageJsonDevDependencies'
	name?: Maybe<Scalars['String']>
	version?: Maybe<Scalars['String']>
}

export type SitePluginPackageJsonDevDependenciesFilterInput = {
	name?: Maybe<StringQueryOperatorInput>
	version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
	elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>
}

export type SitePluginPackageJsonFilterInput = {
	name?: Maybe<StringQueryOperatorInput>
	description?: Maybe<StringQueryOperatorInput>
	version?: Maybe<StringQueryOperatorInput>
	main?: Maybe<StringQueryOperatorInput>
	license?: Maybe<StringQueryOperatorInput>
	dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>
	devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>
	peerDependencies?: Maybe<
		SitePluginPackageJsonPeerDependenciesFilterListInput
	>
	keywords?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonPeerDependencies = {
	__typename?: 'SitePluginPackageJsonPeerDependencies'
	name?: Maybe<Scalars['String']>
	version?: Maybe<Scalars['String']>
}

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
	name?: Maybe<StringQueryOperatorInput>
	version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
	elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>
}

export type SitePluginPluginOptions = {
	__typename?: 'SitePluginPluginOptions'
	plugins?: Maybe<Array<Maybe<SitePluginPluginOptionsPlugins>>>
	name?: Maybe<Scalars['String']>
	path?: Maybe<Scalars['String']>
	short_name?: Maybe<Scalars['String']>
	start_url?: Maybe<Scalars['String']>
	background_color?: Maybe<Scalars['String']>
	theme_color?: Maybe<Scalars['String']>
	display?: Maybe<Scalars['String']>
	icon?: Maybe<Scalars['String']>
	isTSX?: Maybe<Scalars['Boolean']>
	allExtensions?: Maybe<Scalars['Boolean']>
	color?: Maybe<Scalars['String']>
	showSpinner?: Maybe<Scalars['Boolean']>
	trackingId?: Maybe<Scalars['String']>
	pathCheck?: Maybe<Scalars['Boolean']>
}

export type SitePluginPluginOptionsFilterInput = {
	plugins?: Maybe<SitePluginPluginOptionsPluginsFilterListInput>
	name?: Maybe<StringQueryOperatorInput>
	path?: Maybe<StringQueryOperatorInput>
	short_name?: Maybe<StringQueryOperatorInput>
	start_url?: Maybe<StringQueryOperatorInput>
	background_color?: Maybe<StringQueryOperatorInput>
	theme_color?: Maybe<StringQueryOperatorInput>
	display?: Maybe<StringQueryOperatorInput>
	icon?: Maybe<StringQueryOperatorInput>
	isTSX?: Maybe<BooleanQueryOperatorInput>
	allExtensions?: Maybe<BooleanQueryOperatorInput>
	color?: Maybe<StringQueryOperatorInput>
	showSpinner?: Maybe<BooleanQueryOperatorInput>
	trackingId?: Maybe<StringQueryOperatorInput>
	pathCheck?: Maybe<BooleanQueryOperatorInput>
}

export type SitePluginPluginOptionsPlugins = {
	__typename?: 'SitePluginPluginOptionsPlugins'
	resolve?: Maybe<Scalars['String']>
	id?: Maybe<Scalars['String']>
	name?: Maybe<Scalars['String']>
	version?: Maybe<Scalars['String']>
	pluginFilepath?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsPluginsFilterInput = {
	resolve?: Maybe<StringQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	name?: Maybe<StringQueryOperatorInput>
	version?: Maybe<StringQueryOperatorInput>
	pluginFilepath?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsPluginsFilterListInput = {
	elemMatch?: Maybe<SitePluginPluginOptionsPluginsFilterInput>
}

export type SitePluginSortInput = {
	fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>
	order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SiteSiteMetadata = {
	__typename?: 'SiteSiteMetadata'
	title?: Maybe<Scalars['String']>
	author?: Maybe<Scalars['String']>
	description?: Maybe<Scalars['String']>
	siteUrl?: Maybe<Scalars['String']>
}

export type SiteSiteMetadataFilterInput = {
	title?: Maybe<StringQueryOperatorInput>
	author?: Maybe<StringQueryOperatorInput>
	description?: Maybe<StringQueryOperatorInput>
	siteUrl?: Maybe<StringQueryOperatorInput>
}

export type SiteSortInput = {
	fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>
	order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export enum SortOrderEnum {
	ASC = 'ASC',
	DESC = 'DESC'
}

export type StringQueryOperatorInput = {
	eq?: Maybe<Scalars['String']>
	ne?: Maybe<Scalars['String']>
	in?: Maybe<Array<Maybe<Scalars['String']>>>
	nin?: Maybe<Array<Maybe<Scalars['String']>>>
	regex?: Maybe<Scalars['String']>
	glob?: Maybe<Scalars['String']>
}

export type WordCount = {
	__typename?: 'wordCount'
	paragraphs?: Maybe<Scalars['Int']>
	sentences?: Maybe<Scalars['Int']>
	words?: Maybe<Scalars['Int']>
}

export type WordCountFilterInput = {
	paragraphs?: Maybe<IntQueryOperatorInput>
	sentences?: Maybe<IntQueryOperatorInput>
	words?: Maybe<IntQueryOperatorInput>
}
export type Unnamed_1_QueryVariables = {}

export type Unnamed_1_Query = { __typename?: 'Query' } & {
	placeholderImage: Maybe<
		{ __typename?: 'File' } & {
			childImageSharp: Maybe<
				{ __typename?: 'ImageSharp' } & {
					fluid: Maybe<
						{
							__typename?: 'ImageSharpFluid'
						} & GatsbyImageSharpFluidFragment
					>
				}
			>
		}
	>
}

export type SiteTitleQueryQueryVariables = {}

export type SiteTitleQueryQuery = { __typename?: 'Query' } & {
	site: Maybe<
		{ __typename?: 'Site' } & {
			siteMetadata: Maybe<
				{ __typename?: 'SiteSiteMetadata' } & Pick<
					SiteSiteMetadata,
					'title'
				>
			>
		}
	>
}

export type NavigationQueryQueryVariables = {}

export type NavigationQueryQuery = { __typename?: 'Query' } & {
	allFile: Maybe<
		{ __typename?: 'FileConnection' } & {
			edges: Array<
				{ __typename?: 'FileEdge' } & {
					node: { __typename?: 'File' } & Pick<
						File,
						'relativeDirectory'
					> & {
							childMarkdownRemark: Maybe<
								{ __typename?: 'MarkdownRemark' } & {
									frontmatter: Maybe<
										{
											__typename?: 'MarkdownRemarkFrontmatter'
										} & Pick<
											MarkdownRemarkFrontmatter,
											'category'
										>
									>
								}
							>
						}
				}
			>
		}
	>
}

export type DefaultSeoQueryQueryVariables = {}

export type DefaultSeoQueryQuery = { __typename?: 'Query' } & {
	site: Maybe<
		{ __typename?: 'Site' } & {
			siteMetadata: Maybe<
				{ __typename?: 'SiteSiteMetadata' } & Pick<
					SiteSiteMetadata,
					'title' | 'description' | 'author'
				>
			>
		}
	>
}

export type PageQueryQueryVariables = {
	relativeDirectory: Scalars['String']
}

export type PageQueryQuery = { __typename?: 'Query' } & {
	file: Maybe<
		{ __typename?: 'File' } & Pick<File, 'relativeDirectory'> & {
				childMarkdownRemark: Maybe<
					{ __typename?: 'MarkdownRemark' } & Pick<
						MarkdownRemark,
						'htmlAst'
					>
				>
			}
	>
}

export type GatsbyImageSharpFixedFragment = {
	__typename?: 'ImageSharpFixed'
} & Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>

export type GatsbyImageSharpFixed_TracedSvgFragment = {
	__typename?: 'ImageSharpFixed'
} & Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>

export type GatsbyImageSharpFixed_WithWebpFragment = {
	__typename?: 'ImageSharpFixed'
} & Pick<
	ImageSharpFixed,
	'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = {
	__typename?: 'ImageSharpFixed'
} & Pick<
	ImageSharpFixed,
	| 'tracedSVG'
	| 'width'
	| 'height'
	| 'src'
	| 'srcSet'
	| 'srcWebp'
	| 'srcSetWebp'
>

export type GatsbyImageSharpFixed_NoBase64Fragment = {
	__typename?: 'ImageSharpFixed'
} & Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = {
	__typename?: 'ImageSharpFixed'
} & Pick<
	ImageSharpFixed,
	'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>

export type GatsbyImageSharpFluidFragment = {
	__typename?: 'ImageSharpFluid'
} & Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>

export type GatsbyImageSharpFluid_TracedSvgFragment = {
	__typename?: 'ImageSharpFluid'
} & Pick<
	ImageSharpFluid,
	'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>

export type GatsbyImageSharpFluid_WithWebpFragment = {
	__typename?: 'ImageSharpFluid'
} & Pick<
	ImageSharpFluid,
	| 'base64'
	| 'aspectRatio'
	| 'src'
	| 'srcSet'
	| 'srcWebp'
	| 'srcSetWebp'
	| 'sizes'
>

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = {
	__typename?: 'ImageSharpFluid'
} & Pick<
	ImageSharpFluid,
	| 'tracedSVG'
	| 'aspectRatio'
	| 'src'
	| 'srcSet'
	| 'srcWebp'
	| 'srcSetWebp'
	| 'sizes'
>

export type GatsbyImageSharpFluid_NoBase64Fragment = {
	__typename?: 'ImageSharpFluid'
} & Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = {
	__typename?: 'ImageSharpFluid'
} & Pick<
	ImageSharpFluid,
	'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
>

export type GatsbyImageSharpResolutionsFragment = {
	__typename?: 'ImageSharpResolutions'
} & Pick<
	ImageSharpResolutions,
	'base64' | 'width' | 'height' | 'src' | 'srcSet'
>

export type GatsbyImageSharpResolutions_TracedSvgFragment = {
	__typename?: 'ImageSharpResolutions'
} & Pick<
	ImageSharpResolutions,
	'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'
>

export type GatsbyImageSharpResolutions_WithWebpFragment = {
	__typename?: 'ImageSharpResolutions'
} & Pick<
	ImageSharpResolutions,
	'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>

export type GatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = {
	__typename?: 'ImageSharpResolutions'
} & Pick<
	ImageSharpResolutions,
	| 'tracedSVG'
	| 'width'
	| 'height'
	| 'src'
	| 'srcSet'
	| 'srcWebp'
	| 'srcSetWebp'
>

export type GatsbyImageSharpResolutions_NoBase64Fragment = {
	__typename?: 'ImageSharpResolutions'
} & Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet'>

export type GatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = {
	__typename?: 'ImageSharpResolutions'
} & Pick<
	ImageSharpResolutions,
	'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>

export type GatsbyImageSharpSizesFragment = {
	__typename?: 'ImageSharpSizes'
} & Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>

export type GatsbyImageSharpSizes_TracedSvgFragment = {
	__typename?: 'ImageSharpSizes'
} & Pick<
	ImageSharpSizes,
	'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>

export type GatsbyImageSharpSizes_WithWebpFragment = {
	__typename?: 'ImageSharpSizes'
} & Pick<
	ImageSharpSizes,
	| 'base64'
	| 'aspectRatio'
	| 'src'
	| 'srcSet'
	| 'srcWebp'
	| 'srcSetWebp'
	| 'sizes'
>

export type GatsbyImageSharpSizes_WithWebp_TracedSvgFragment = {
	__typename?: 'ImageSharpSizes'
} & Pick<
	ImageSharpSizes,
	| 'tracedSVG'
	| 'aspectRatio'
	| 'src'
	| 'srcSet'
	| 'srcWebp'
	| 'srcSetWebp'
	| 'sizes'
>

export type GatsbyImageSharpSizes_NoBase64Fragment = {
	__typename?: 'ImageSharpSizes'
} & Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>

export type GatsbyImageSharpSizes_WithWebp_NoBase64Fragment = {
	__typename?: 'ImageSharpSizes'
} & Pick<
	ImageSharpSizes,
	'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
>
export const GatsbyImageSharpFixedFragmentDoc = gql`
	fragment GatsbyImageSharpFixed on ImageSharpFixed {
		base64
		width
		height
		src
		srcSet
	}
`
export const GatsbyImageSharpFixed_tracedSVGFragmentDoc = gql`
	fragment GatsbyImageSharpFixed_tracedSVG on ImageSharpFixed {
		tracedSVG
		width
		height
		src
		srcSet
	}
`
export const GatsbyImageSharpFixed_withWebpFragmentDoc = gql`
	fragment GatsbyImageSharpFixed_withWebp on ImageSharpFixed {
		base64
		width
		height
		src
		srcSet
		srcWebp
		srcSetWebp
	}
`
export const GatsbyImageSharpFixed_withWebp_tracedSVGFragmentDoc = gql`
	fragment GatsbyImageSharpFixed_withWebp_tracedSVG on ImageSharpFixed {
		tracedSVG
		width
		height
		src
		srcSet
		srcWebp
		srcSetWebp
	}
`
export const GatsbyImageSharpFixed_noBase64FragmentDoc = gql`
	fragment GatsbyImageSharpFixed_noBase64 on ImageSharpFixed {
		width
		height
		src
		srcSet
	}
`
export const GatsbyImageSharpFixed_withWebp_noBase64FragmentDoc = gql`
	fragment GatsbyImageSharpFixed_withWebp_noBase64 on ImageSharpFixed {
		width
		height
		src
		srcSet
		srcWebp
		srcSetWebp
	}
`
export const GatsbyImageSharpFluidFragmentDoc = gql`
	fragment GatsbyImageSharpFluid on ImageSharpFluid {
		base64
		aspectRatio
		src
		srcSet
		sizes
	}
`
export const GatsbyImageSharpFluid_tracedSVGFragmentDoc = gql`
	fragment GatsbyImageSharpFluid_tracedSVG on ImageSharpFluid {
		tracedSVG
		aspectRatio
		src
		srcSet
		sizes
	}
`
export const GatsbyImageSharpFluid_withWebpFragmentDoc = gql`
	fragment GatsbyImageSharpFluid_withWebp on ImageSharpFluid {
		base64
		aspectRatio
		src
		srcSet
		srcWebp
		srcSetWebp
		sizes
	}
`
export const GatsbyImageSharpFluid_withWebp_tracedSVGFragmentDoc = gql`
	fragment GatsbyImageSharpFluid_withWebp_tracedSVG on ImageSharpFluid {
		tracedSVG
		aspectRatio
		src
		srcSet
		srcWebp
		srcSetWebp
		sizes
	}
`
export const GatsbyImageSharpFluid_noBase64FragmentDoc = gql`
	fragment GatsbyImageSharpFluid_noBase64 on ImageSharpFluid {
		aspectRatio
		src
		srcSet
		sizes
	}
`
export const GatsbyImageSharpFluid_withWebp_noBase64FragmentDoc = gql`
	fragment GatsbyImageSharpFluid_withWebp_noBase64 on ImageSharpFluid {
		aspectRatio
		src
		srcSet
		srcWebp
		srcSetWebp
		sizes
	}
`
export const GatsbyImageSharpResolutionsFragmentDoc = gql`
	fragment GatsbyImageSharpResolutions on ImageSharpResolutions {
		base64
		width
		height
		src
		srcSet
	}
`
export const GatsbyImageSharpResolutions_tracedSVGFragmentDoc = gql`
	fragment GatsbyImageSharpResolutions_tracedSVG on ImageSharpResolutions {
		tracedSVG
		width
		height
		src
		srcSet
	}
`
export const GatsbyImageSharpResolutions_withWebpFragmentDoc = gql`
	fragment GatsbyImageSharpResolutions_withWebp on ImageSharpResolutions {
		base64
		width
		height
		src
		srcSet
		srcWebp
		srcSetWebp
	}
`
export const GatsbyImageSharpResolutions_withWebp_tracedSVGFragmentDoc = gql`
	fragment GatsbyImageSharpResolutions_withWebp_tracedSVG on ImageSharpResolutions {
		tracedSVG
		width
		height
		src
		srcSet
		srcWebp
		srcSetWebp
	}
`
export const GatsbyImageSharpResolutions_noBase64FragmentDoc = gql`
	fragment GatsbyImageSharpResolutions_noBase64 on ImageSharpResolutions {
		width
		height
		src
		srcSet
	}
`
export const GatsbyImageSharpResolutions_withWebp_noBase64FragmentDoc = gql`
	fragment GatsbyImageSharpResolutions_withWebp_noBase64 on ImageSharpResolutions {
		width
		height
		src
		srcSet
		srcWebp
		srcSetWebp
	}
`
export const GatsbyImageSharpSizesFragmentDoc = gql`
	fragment GatsbyImageSharpSizes on ImageSharpSizes {
		base64
		aspectRatio
		src
		srcSet
		sizes
	}
`
export const GatsbyImageSharpSizes_tracedSVGFragmentDoc = gql`
	fragment GatsbyImageSharpSizes_tracedSVG on ImageSharpSizes {
		tracedSVG
		aspectRatio
		src
		srcSet
		sizes
	}
`
export const GatsbyImageSharpSizes_withWebpFragmentDoc = gql`
	fragment GatsbyImageSharpSizes_withWebp on ImageSharpSizes {
		base64
		aspectRatio
		src
		srcSet
		srcWebp
		srcSetWebp
		sizes
	}
`
export const GatsbyImageSharpSizes_withWebp_tracedSVGFragmentDoc = gql`
	fragment GatsbyImageSharpSizes_withWebp_tracedSVG on ImageSharpSizes {
		tracedSVG
		aspectRatio
		src
		srcSet
		srcWebp
		srcSetWebp
		sizes
	}
`
export const GatsbyImageSharpSizes_noBase64FragmentDoc = gql`
	fragment GatsbyImageSharpSizes_noBase64 on ImageSharpSizes {
		aspectRatio
		src
		srcSet
		sizes
	}
`
export const GatsbyImageSharpSizes_withWebp_noBase64FragmentDoc = gql`
	fragment GatsbyImageSharpSizes_withWebp_noBase64 on ImageSharpSizes {
		aspectRatio
		src
		srcSet
		srcWebp
		srcSetWebp
		sizes
	}
`
export const SiteTitleQueryDocument = gql`
	query SiteTitleQuery {
		site {
			siteMetadata {
				title
			}
		}
	}
`
export type SiteTitleQueryComponentProps = Omit<
	ReactApollo.QueryProps<SiteTitleQueryQuery, SiteTitleQueryQueryVariables>,
	'query'
>

export const SiteTitleQueryComponent = (
	props: SiteTitleQueryComponentProps
) => (
	<ReactApollo.Query<SiteTitleQueryQuery, SiteTitleQueryQueryVariables>
		query={SiteTitleQueryDocument}
		{...props}
	/>
)

export type SiteTitleQueryProps<TChildProps = {}> = Partial<
	ReactApollo.DataProps<SiteTitleQueryQuery, SiteTitleQueryQueryVariables>
> &
	TChildProps
export function withSiteTitleQuery<TProps, TChildProps = {}>(
	operationOptions?: ReactApollo.OperationOption<
		TProps,
		SiteTitleQueryQuery,
		SiteTitleQueryQueryVariables,
		SiteTitleQueryProps<TChildProps>
	>
) {
	return ReactApollo.withQuery<
		TProps,
		SiteTitleQueryQuery,
		SiteTitleQueryQueryVariables,
		SiteTitleQueryProps<TChildProps>
	>(SiteTitleQueryDocument, {
		alias: 'withSiteTitleQuery',
		...operationOptions
	})
}
export const NavigationQueryDocument = gql`
	query NavigationQuery {
		allFile(
			filter: { sourceInstanceName: { eq: "pages" } }
			sort: { fields: relativeDirectory, order: ASC }
		) {
			edges {
				node {
					relativeDirectory
					childMarkdownRemark {
						frontmatter {
							category
						}
					}
				}
			}
		}
	}
`
export type NavigationQueryComponentProps = Omit<
	ReactApollo.QueryProps<NavigationQueryQuery, NavigationQueryQueryVariables>,
	'query'
>

export const NavigationQueryComponent = (
	props: NavigationQueryComponentProps
) => (
	<ReactApollo.Query<NavigationQueryQuery, NavigationQueryQueryVariables>
		query={NavigationQueryDocument}
		{...props}
	/>
)

export type NavigationQueryProps<TChildProps = {}> = Partial<
	ReactApollo.DataProps<NavigationQueryQuery, NavigationQueryQueryVariables>
> &
	TChildProps
export function withNavigationQuery<TProps, TChildProps = {}>(
	operationOptions?: ReactApollo.OperationOption<
		TProps,
		NavigationQueryQuery,
		NavigationQueryQueryVariables,
		NavigationQueryProps<TChildProps>
	>
) {
	return ReactApollo.withQuery<
		TProps,
		NavigationQueryQuery,
		NavigationQueryQueryVariables,
		NavigationQueryProps<TChildProps>
	>(NavigationQueryDocument, {
		alias: 'withNavigationQuery',
		...operationOptions
	})
}
export const DefaultSeoQueryDocument = gql`
	query DefaultSEOQuery {
		site {
			siteMetadata {
				title
				description
				author
			}
		}
	}
`
export type DefaultSeoQueryComponentProps = Omit<
	ReactApollo.QueryProps<DefaultSeoQueryQuery, DefaultSeoQueryQueryVariables>,
	'query'
>

export const DefaultSeoQueryComponent = (
	props: DefaultSeoQueryComponentProps
) => (
	<ReactApollo.Query<DefaultSeoQueryQuery, DefaultSeoQueryQueryVariables>
		query={DefaultSeoQueryDocument}
		{...props}
	/>
)

export type DefaultSeoQueryProps<TChildProps = {}> = Partial<
	ReactApollo.DataProps<DefaultSeoQueryQuery, DefaultSeoQueryQueryVariables>
> &
	TChildProps
export function withDefaultSeoQuery<TProps, TChildProps = {}>(
	operationOptions?: ReactApollo.OperationOption<
		TProps,
		DefaultSeoQueryQuery,
		DefaultSeoQueryQueryVariables,
		DefaultSeoQueryProps<TChildProps>
	>
) {
	return ReactApollo.withQuery<
		TProps,
		DefaultSeoQueryQuery,
		DefaultSeoQueryQueryVariables,
		DefaultSeoQueryProps<TChildProps>
	>(DefaultSeoQueryDocument, {
		alias: 'withDefaultSeoQuery',
		...operationOptions
	})
}
export const PageQueryDocument = gql`
	query PageQuery($relativeDirectory: String!) {
		file(relativeDirectory: { eq: $relativeDirectory }) {
			relativeDirectory
			childMarkdownRemark {
				htmlAst
			}
		}
	}
`
export type PageQueryComponentProps = Omit<
	ReactApollo.QueryProps<PageQueryQuery, PageQueryQueryVariables>,
	'query'
> &
	({ variables: PageQueryQueryVariables; skip?: false } | { skip: true })

export const PageQueryComponent = (props: PageQueryComponentProps) => (
	<ReactApollo.Query<PageQueryQuery, PageQueryQueryVariables>
		query={PageQueryDocument}
		{...props}
	/>
)

export type PageQueryProps<TChildProps = {}> = Partial<
	ReactApollo.DataProps<PageQueryQuery, PageQueryQueryVariables>
> &
	TChildProps
export function withPageQuery<TProps, TChildProps = {}>(
	operationOptions?: ReactApollo.OperationOption<
		TProps,
		PageQueryQuery,
		PageQueryQueryVariables,
		PageQueryProps<TChildProps>
	>
) {
	return ReactApollo.withQuery<
		TProps,
		PageQueryQuery,
		PageQueryQueryVariables,
		PageQueryProps<TChildProps>
	>(PageQueryDocument, {
		alias: 'withPageQuery',
		...operationOptions
	})
}
