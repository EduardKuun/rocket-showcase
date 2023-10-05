/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n\tquery ContextTracks {\n\t\ttracks {\n\t\t\tname\n\t\t\tlatitude\n\t\t\tlongitude\n\t\t\tratings {\n\t\t\t\tdifficulty\n\t\t\t\ttype\n\t\t\t}\n\t\t}\n\t}\n": types.ContextTracksDocument,
    "\n\tquery GetRegions {\n\t\tregions {\n\t\t\tname\n\t\t\tid\n\t\t}\n\t}\n": types.GetRegionsDocument,
    "\n\tquery Tracks($tracksInput: TrackFilterInput) {\n\t\ttracks(where: $tracksInput) {\n\t\t\tname\n\t\t\tid\n\t\t\tlatitude\n\t\t\tlongitude\n\t\t\tregion {\n\t\t\t\tname\n\t\t\t}\n\t\t\tratings {\n\t\t\t\tdifficulty\n\t\t\t\ttype\n\t\t\t}\n\t\t}\n\t}\n": types.TracksDocument,
    "\n\tquery GetTrackById($id: UUID!) {\n\t\ttrackById(id: $id) {\n\t\t\tname\n\t\t\tid\n\t\t\tlatitude\n\t\t\tlongitude\n\t\t\tratings {\n\t\t\t\tdifficulty\n\t\t\t\ttype\n\t\t\t\tcomment\n\t\t\t}\n\t\t\tregion {\n\t\t\t\tname\n\t\t\t}\n\t\t}\n\t}\n": types.GetTrackByIdDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\tquery ContextTracks {\n\t\ttracks {\n\t\t\tname\n\t\t\tlatitude\n\t\t\tlongitude\n\t\t\tratings {\n\t\t\t\tdifficulty\n\t\t\t\ttype\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery ContextTracks {\n\t\ttracks {\n\t\t\tname\n\t\t\tlatitude\n\t\t\tlongitude\n\t\t\tratings {\n\t\t\t\tdifficulty\n\t\t\t\ttype\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\tquery GetRegions {\n\t\tregions {\n\t\t\tname\n\t\t\tid\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery GetRegions {\n\t\tregions {\n\t\t\tname\n\t\t\tid\n\t\t}\n\t}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\tquery Tracks($tracksInput: TrackFilterInput) {\n\t\ttracks(where: $tracksInput) {\n\t\t\tname\n\t\t\tid\n\t\t\tlatitude\n\t\t\tlongitude\n\t\t\tregion {\n\t\t\t\tname\n\t\t\t}\n\t\t\tratings {\n\t\t\t\tdifficulty\n\t\t\t\ttype\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery Tracks($tracksInput: TrackFilterInput) {\n\t\ttracks(where: $tracksInput) {\n\t\t\tname\n\t\t\tid\n\t\t\tlatitude\n\t\t\tlongitude\n\t\t\tregion {\n\t\t\t\tname\n\t\t\t}\n\t\t\tratings {\n\t\t\t\tdifficulty\n\t\t\t\ttype\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\tquery GetTrackById($id: UUID!) {\n\t\ttrackById(id: $id) {\n\t\t\tname\n\t\t\tid\n\t\t\tlatitude\n\t\t\tlongitude\n\t\t\tratings {\n\t\t\t\tdifficulty\n\t\t\t\ttype\n\t\t\t\tcomment\n\t\t\t}\n\t\t\tregion {\n\t\t\t\tname\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery GetTrackById($id: UUID!) {\n\t\ttrackById(id: $id) {\n\t\t\tname\n\t\t\tid\n\t\t\tlatitude\n\t\t\tlongitude\n\t\t\tratings {\n\t\t\t\tdifficulty\n\t\t\t\ttype\n\t\t\t\tcomment\n\t\t\t}\n\t\t\tregion {\n\t\t\t\tname\n\t\t\t}\n\t\t}\n\t}\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;