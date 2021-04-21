import { Post } from "../store/PostsStore";
import { Follower } from "../store/FollowersStore";
import { StackNavigationProp } from "@react-navigation/stack";
import { User } from "../store/UsersStore";
import { definitions } from "./supabase";
import { MaterialTopTabNavigationProp } from "@react-navigation/material-top-tabs";

export type MessageStackNavigationParams = {
	MessageList: {
		rootNavigation: MaterialTopTabNavigationProp<
			SwipeTabNavigationParams,
			"Messages"
		>;
	};
	Messages: {
		username: string;
	};
	Comments: CommentsPageParams;
	Profile: ProfilePageProps & {
		goBack: () => void;
	};
	Post: {
		post: Pick<Post, "caption" | "postedAt" | "postId" | "imageUrl">;
		user: Pick<User, "username" | "profilePic">;
	};
};
export type SignInNavigationParams = {
	Login: undefined;
	Signup: {
		name: string | null;
		email: string;
		profilePic: string | null;
	};
};

export type CommentsPageParams = {
	post: Post;
	user: User;
};

export type SwipeTabNavigationParams = {
	Tabs: undefined;
	Messages: undefined;
};
export type HomeStackNavigationParams = {
	Home: {
		rootNavigation: MaterialTopTabNavigationProp<
			SwipeTabNavigationParams,
			"Tabs"
		>;
	};
	Comments: CommentsPageParams;
	Profile: StackNavigationProp<ProfileStackParams, "ProfilePage">;
};

export type ProfileStackParams = {
	ProfilePage: ProfilePageProps;
	Followers: ProfilePageProps & {
		followers: Follower[];
	};
	Following: ProfilePageProps & {
		following: Follower[];
	};
	Posts: PostListParams;
	Settings: undefined;
	EditProfile: undefined;
};

export interface UserProfile {
	username?: string;
	profilePic?: string;
	isCurrentUser?: boolean;
}

type ProfilePageProps = UserProfile;

export type ExploreStackNavigationParams = {
	Explore: undefined;
	PostDetail: {
		post: Pick<Post, "caption" | "postedAt" | "postId" | "imageUrl">;
		user: Pick<User, "username" | "profilePic">;
	};
	Comments: CommentsPageParams;
	Profile: ProfilePageProps & {
		goBack: () => void;
	};
};
export type PostListParams = {
	goBack: () => void;
	user: {
		username: string;
		profilePic: string | undefined;
	};
	postId: number;
	postList: Array<definitions["posts"]>;
	rootNavigation: StackNavigationProp<ProfileStackParams, "ProfilePage">;
};
export type PostStackNavigationParams = {
	PostList: PostListParams;
	Comments: CommentsPageParams;
	Profile: StackNavigationProp<ProfileStackParams, "ProfilePage">;
};

export type TabNavigationParams = {
	Home: {
		rootNavigation: MaterialTopTabNavigationProp<
			SwipeTabNavigationParams,
			"Tabs"
		>;
	};
	Explore: undefined;
	// Activity: undefined;
	New: undefined;
	Profile: undefined;
};

export type SignedOutStackParams = {
	Login: undefined;
	SwipeTabs: undefined;
};
