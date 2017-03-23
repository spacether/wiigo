require 'test_helper'

class Api::RsvpsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_rsvps_create_url
    assert_response :success
  end

  test "should get update" do
    get api_rsvps_update_url
    assert_response :success
  end

end
