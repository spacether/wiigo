export const joinGroup = (group, user) => (
  $.ajax({
    method: "POST",
    url: "api/memberships",
    data: {membership: {group_id: group.id, user_id: user.id}}
  })
);

export const leaveGroupFromGroup = (item) => {
  return $.ajax({
    method: "DELETE",
    url: `api/memberships/${item.membership_id}?type=Group`
  });
};

export const leaveGroupFromUser = (item) => (
  $.ajax({
    method: "DELETE",
    url: `api/memberships/${item.membership_id}?type=User`
  })
);
