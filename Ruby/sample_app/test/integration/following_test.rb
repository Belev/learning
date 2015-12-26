require 'test_helper'

class FollowingTest < ActionDispatch::IntegrationTest
  def setup
    @user = users(:user)
    @user2 = users(:user2)

    setup_follow_users

    log_in_as(@user)
  end

  test "following page" do
    get following_user_path(@user)
    assert_not @user.following.empty?
    assert_match @user.following.count.to_s, response.body
    @user.following.each do |user|
      assert_select "a[href=?]", user_path(user)
    end
  end

  test "followers page" do
    get followers_user_path(@user)
    assert_not @user.followers.empty?
    assert_match @user.followers.count.to_s, response.body
    @user.followers.each do |user|
      assert_select "a[href=?]", user_path(user)
    end
  end

  test "should follow user" do
    assert_difference '@user.following.count', 1 do
      post relationships_path, followed_id: @user2.id
    end
  end

  test "should unfollow user" do
    @user.follow(@user2)
    relationship = @user.active_relationships.find_by(followed_id: @user2.id)
    assert_difference '@user.following.count', -1 do
      delete relationship_path(relationship)
    end
  end

  private

  def setup_follow_users
    user3 = users(:user3)

    @user.follow(user3)
    user3.follow(@user)
  end
end
