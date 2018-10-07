import { GraphQLNamedType, GraphQLSchema } from 'graphql';
import { IResolversParameter } from '../Interfaces';
import { SchemaDirectiveVisitor } from '../schemaVisitor';
export declare type OnTypeConflict = (left: GraphQLNamedType, right: GraphQLNamedType, info?: {
    left: {
        schema?: GraphQLSchema;
    };
    right: {
        schema?: GraphQLSchema;
    };
}) => GraphQLNamedType;
export default function mergeSchemas({ schemas, onTypeConflict, resolvers, schemaDirectives, inheritResolversFromInterfaces }: {
    schemas: Array<string | GraphQLSchema | Array<GraphQLNamedType>>;
    onTypeConflict?: OnTypeConflict;
    resolvers?: IResolversParameter;
    schemaDirectives?: {
        [name: string]: typeof SchemaDirectiveVisitor;
    };
    inheritResolversFromInterfaces?: boolean;
}): GraphQLSchema;
