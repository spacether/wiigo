export const fetchTopics = () => (
  $.ajax({
    method: "GET",
    url: "api/topics"
  })
);
