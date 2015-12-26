require 'test_helper'

class UserTest < ActiveSupport::TestCase
  def setup
    @user = User.new(name: "test user", email: "test@test.com", password: "test", password_confirmation: "test")
  end

  test "should be valid" do
    assert @user.valid?
  end

  test "name should be present" do
    @user.name = "    "
    assert_not @user.valid?
  end

  test "name should be with length max 50" do
    @user.name = "a" * 51
    assert_not @user.valid?
  end

  test "email should be present" do
    @user.email = "    "
    assert_not @user.valid?
  end

  test "email should be with length max 255" do
    @user.email = "a" * 256
    assert_not @user.valid?
  end

  test "email should be unique" do
    duplicate_user = @user.dup
    @user.save
    assert_not duplicate_user.valid?

    duplicate_user.email = @user.email.upcase
    assert_not duplicate_user.valid?
  end

  test "email should be saved as lower-case" do
    mixed_case_email = "TeSt@TeST.CoM"
    @user.email = mixed_case_email
    @user.save
    assert_equal mixed_case_email.downcase, @user.reload.email
  end

  test "password should have minimum 4 characters" do
    @user.password = @user.password_confirmation = "a" * 3
    assert_not @user.valid?
  end

  test "associated microposts should be destroyed" do
    @user.save
    @user.microposts.create!(content: "Test content")
    assert_difference 'Micropost.count', -1 do
      @user.destroy
    end
  end

  test "should follow and unfollow user" do
    user = users(:user)
    user2 = users(:user2)
    assert_not user.following?(user2)

    user.follow(user2)
    assert user.following?(user2)
    assert user2.followers.include?(user)

    user.unfollow(user2)
    assert_not user.following?(user2)
  end

  test "feed should have the right posts" do
    user = users(:user)
    user2 = users(:user2)
    user3 = users(:user3)

    user.follow(user3)

    # Posts from self
    user.microposts.each do |post_self|
      assert user.feed.include?(post_self)
    end

    # Posts from followed user
    user3.microposts.each do |post_following|
      assert user.feed.include?(post_following)
    end

    # Posts from unfollowed user
    user2.microposts.each do |post_unfollowed|
      assert_not user.feed.include?(post_unfollowed)
    end
  end
end
