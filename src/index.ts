import { Strapi } from "@strapi/strapi";

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */

  register({ strapi }: {strapi: Strapi}) {
    const { toEntityResponseCollection } = strapi.plugin("graphql").service("format").returnTypes;
    const extensionService = strapi.plugin("graphql").service("extension");

    extensionService.use(({ nexus }) => ({
      types: [
        nexus.extendType({
          type: "UsersPermissionsMe",
          definition(t) {
            t.string('firstName');
            t.string('lastName');
            t.string('middleName');
            // t.field("solvedQuizzes", {
            //   type: "QuizRelationResponseCollection",
            //   resolve: async (root, args) => {
            //     const userData = await strapi.db.query("plugin::users-permissions.user").findOne({
            //       select: [], // solvedQuizzes are there due to populate
            //       where: { id: root.id },
            //       populate: { solvedQuizzes: true },
            //     });
            //     return toEntityResponseCollection(userData.solvedQuizzes ?? [], {
            //       args,
            //       resourceUID: "api::institution.quiz",
            //     });
            //   },
            // });
          },
        }),
      ],
    }));
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(strapi: Strapi) {},
};
