require 'test_helper'

class Api::MembershipsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_memberships_create_url
    assert_response :success
  end

  test "should get destroy" do
    get api_memberships_destroy_url
    assert_response :success
  end

end
