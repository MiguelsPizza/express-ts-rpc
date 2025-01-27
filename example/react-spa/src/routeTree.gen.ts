// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from "./routes/__root";
import { Route as IndexImport } from "./routes/index";
import { Route as PostsImport } from "./routes/posts";
import { Route as PostsPostIdImport } from "./routes/posts.$postId";
import { Route as PostsIndexImport } from "./routes/posts.index";

// Create/Update Routes

const PostsRoute = PostsImport.update({
  id: "/posts",
  path: "/posts",
  getParentRoute: () => rootRoute,
} as any);

const IndexRoute = IndexImport.update({
  id: "/",
  path: "/",
  getParentRoute: () => rootRoute,
} as any);

const PostsIndexRoute = PostsIndexImport.update({
  id: "/",
  path: "/",
  getParentRoute: () => PostsRoute,
} as any);

const PostsPostIdRoute = PostsPostIdImport.update({
  id: "/$postId",
  path: "/$postId",
  getParentRoute: () => PostsRoute,
} as any);

// Populate the FileRoutesByPath interface

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "/": {
      id: "/";
      path: "/";
      fullPath: "/";
      preLoaderRoute: typeof IndexImport;
      parentRoute: typeof rootRoute;
    };
    "/posts": {
      id: "/posts";
      path: "/posts";
      fullPath: "/posts";
      preLoaderRoute: typeof PostsImport;
      parentRoute: typeof rootRoute;
    };
    "/posts/$postId": {
      id: "/posts/$postId";
      path: "/$postId";
      fullPath: "/posts/$postId";
      preLoaderRoute: typeof PostsPostIdImport;
      parentRoute: typeof PostsImport;
    };
    "/posts/": {
      id: "/posts/";
      path: "/";
      fullPath: "/posts/";
      preLoaderRoute: typeof PostsIndexImport;
      parentRoute: typeof PostsImport;
    };
  }
}

// Create and export the route tree

interface PostsRouteChildren {
  PostsPostIdRoute: typeof PostsPostIdRoute;
  PostsIndexRoute: typeof PostsIndexRoute;
}

const PostsRouteChildren: PostsRouteChildren = {
  PostsPostIdRoute: PostsPostIdRoute,
  PostsIndexRoute: PostsIndexRoute,
};

const PostsRouteWithChildren = PostsRoute._addFileChildren(PostsRouteChildren);

export interface FileRoutesByFullPath {
  "/": typeof IndexRoute;
  "/posts": typeof PostsRouteWithChildren;
  "/posts/$postId": typeof PostsPostIdRoute;
  "/posts/": typeof PostsIndexRoute;
}

export interface FileRoutesByTo {
  "/": typeof IndexRoute;
  "/posts/$postId": typeof PostsPostIdRoute;
  "/posts": typeof PostsIndexRoute;
}

export interface FileRoutesById {
  __root__: typeof rootRoute;
  "/": typeof IndexRoute;
  "/posts": typeof PostsRouteWithChildren;
  "/posts/$postId": typeof PostsPostIdRoute;
  "/posts/": typeof PostsIndexRoute;
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath;
  fullPaths: "/" | "/posts" | "/posts/$postId" | "/posts/";
  fileRoutesByTo: FileRoutesByTo;
  to: "/" | "/posts/$postId" | "/posts";
  id: "__root__" | "/" | "/posts" | "/posts/$postId" | "/posts/";
  fileRoutesById: FileRoutesById;
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute;
  PostsRoute: typeof PostsRouteWithChildren;
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  PostsRoute: PostsRouteWithChildren,
};

export const routeTree = rootRoute._addFileChildren(rootRouteChildren)._addFileTypes<FileRouteTypes>();

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/posts"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/posts": {
      "filePath": "posts.tsx",
      "children": [
        "/posts/$postId",
        "/posts/"
      ]
    },
    "/posts/$postId": {
      "filePath": "posts.$postId.tsx",
      "parent": "/posts"
    },
    "/posts/": {
      "filePath": "posts.index.tsx",
      "parent": "/posts"
    }
  }
}
ROUTE_MANIFEST_END */
