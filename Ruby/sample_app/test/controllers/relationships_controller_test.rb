require 'test_helper'

class RelationshipsControllerTest < ActionController::TestCase
  test "create should require logged-in user" do
    assert_no_difference 'Relationship.count' do
      post :create
    end
    assert_redirected_to login_url
  end

  test "destroy should require logged-in user" do
    relationship = Relationship.create(follower: users(:user), followed: users(:user2))

    assert_no_difference 'Relationship.count' do
      delete :destroy, id: relationship
    end
    assert_redirected_to login_url
  end
end
