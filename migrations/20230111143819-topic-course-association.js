'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint("Topics", {
      fields: ["course_id"],
      type: "foreign key",
      name: "topic_course_association",
      references: {
        table: "Courses",
        field: "id"
      }
    })
  },

  async down (queryInterface, Sequelize) {
      queryInterface.removeConstraint("Topics", {
        fields: ["course_id"],
        type: "foreign key",
        name: "topic_course_association",
        references: {
          table: "Courses",
          field: "id"
        }
      })
  }
};
