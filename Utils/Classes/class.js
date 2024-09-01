export const ROLE = {
  ADMIN: "admin",
  MEMBER: "member",
};

export const POSITION = {
  PRESIDENT: {
    role: "president",
    headline: true,
    schedule: true,
    subgroups: true,
    subgroup_link: false,
    promotion: true,
    delete_headline: true,
    delete_schedule: true,
    delete_subgroups: true,
    delete_investment_group: true,
    leave_group: true,
    view_headline: true,
    view_schedule: true,
    view_subgroup: true,
    view_messages: true,
    view_all_links: true,
  },

  VICE_PRESIDENT: {
    role: "vice president",
    headline: true,
    schedule: true,
    subgroups: true,
    subgroup_link: false,
    promotion: true,
    delete_headline: true,
    delete_schedule: true,
    delete_subgroups: true,
    delete_investment_group: false,
    leave_group: true,
    view_headline: true,
    view_schedule: true,
    view_subgroup: true,
    view_messages: true,
    view_all_links: true,
  },

  TREASURER: {
    role: "treasurer",
    headline: true,
    schedule: true,
    subgroups: false,
    subgroup_link: false,
    promotion: false,
    delete_headline: true,
    delete_schedule: true,
    delete_subgroups: false,
    delete_investment_group: false,
    leave_group: true,
    view_headline: true,
    view_schedule: true,
    view_subgroup: true,
    view_messages: true,
    view_all_links: true,
  },

  TEAM_LEADER: {
    role: "team leader",
    headline: false,
    schedule: true,
    subgroups: false,
    subgroup_link: true,
    promotion: false,
    delete_headline: false,
    delete_schedule: true,
    delete_subgroups: false,
    delete_investment_group: false,
    leave_group: true,
    view_headline: true,
    view_schedule: true,
    view_subgroup: true,
    view_messages: true,
    view_all_links: true,
  },

  ASSOCIATE: {
    role: "associate",
    headline: false,
    schedule: false,
    subgroups: false,
    subgroup_link: false,
    promotion: false,
    delete_headline: false,
    delete_schedule: false,
    delete_subgroups: false,
    delete_investment_group: false,
    leave_group: true,
    view_headline: true,
    view_schedule: true,
    view_subgroup: true,
    view_messages: true,
    view_all_links: true,
  },
};

export const CATEGORY = {
  GENERAL: "general",
  MEET_UP: "meet up",
};
