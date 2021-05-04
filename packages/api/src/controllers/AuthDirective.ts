import { AuthenticationError, SchemaDirectiveVisitor } from 'apollo-server';
import {
  GraphQLField,
  defaultFieldResolver
} from "graphql";
import { isArrayBindingPattern } from 'typescript';

class AuthDirective extends SchemaDirectiveVisitor {

  public visitFieldDefinition(field: GraphQLField<any, any>) {
    const { resolve = defaultFieldResolver } = field;
    const roles = this.args.roles;
    field.resolve = async function(...args) {
      const [, , context] = args;
      const userRoles = context.user?.role;
      if(!Array.isArray(userRoles))
        throw new AuthenticationError("Autentication Error");

      if (roles.some(role => userRoles.indexOf(role) !== -1)) {
        const result = await resolve.apply(this, args);
        return result;
      }

      throw new AuthenticationError("You are not authorized for this resource");
    };
  }
}

export {AuthDirective}