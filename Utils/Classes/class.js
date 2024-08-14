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
    promotion: true,
    delete_headline: true,
    delete_schedule: true,
    delete_subgroups: true,
    view_headline: true,
    view_schedule: true,
    view_subgroup: true,
  },

  VICE_PRESIDENT: {
    role: "vice president",
    headline: true,
    schedule: true,
    subgroups: true,
    promotion: true,
    delete_headline: true,
    delete_schedule: true,
    delete_subgroups: true,
    view_headline: true,
    view_schedule: true,
    view_subgroup: true,
  },

  TREASURER: {
    role: "treasurer",
    headline: true,
    schedule: true,
    subgroups: false,
    promotion: false,
    delete_headline: true,
    delete_schedule: true,
    delete_subgroups: false,
    view_headline: true,
    view_schedule: true,
    view_subgroup: true,
  },

  TEAM_LEADER: {
    role: "team leader",
    headline: false,
    schedule: true,
    subgroups: false,
    promotion: false,
    delete_headline: false,
    delete_schedule: true,
    delete_subgroups: false,
    view_headline: true,
    view_schedule: true,
    view_subgroup: true,
  },

  ASSOCIATE: {
    role: "associate",
    headline: false,
    schedule: false,
    subgroups: false,
    promotion: false,
    delete_headline: false,
    delete_schedule: false,
    delete_subgroups: false,
    view_headline: true,
    view_schedule: true,
    view_subgroup: true,
  },
};

export const CATEGORY = {
  GENERAL: "general",
  MEET_UP: "meet up",
};
