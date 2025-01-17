import { Post } from "../store/PostsStore";
import { Follower } from "../store/FollowersStore";
import { User } from "../store/UsersStore";
import { definitions } from "./supabase";

export type MessageStackNavigationParams = {
	ChatList: undefined;
	NewChat: undefined;
	Messages: {
		username: string;
	};
	Comments: CommentsPageParams;
	Profile: ProfilePageProps & {
		goBack?: () => void;
		showBackArrow?: boolean;
	};
	Post: {
		post: Pick<Post, "caption" | "postedAt" | "postId" | "imageUrl">;
		user: Pick<User, "username" | "profilePic">;
	};
	EditPost: { postId: number; caption?: string; imageUrl?: string };
	Likes: {
		postId: number;
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
	Home: undefined;
	Comments: CommentsPageParams;
	Profile: ProfilePageProps;
	EditPost: { postId: number; caption?: string; imageUrl?: string };
	Likes: {
		postId: number;
	};
};

export type ProfileStackParams = {
	Messages: {
		username: string;
	};
	ProfilePage: ProfilePageProps & {
		goBack?: () => void;
		showBackArrow?: boolean;
	};
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
}

type ProfilePageProps = UserProfile;

export type ExploreStackNavigationParams = {
	Explore: undefined;
	PostDetail: {
		post: Pick<Post, "caption" | "postedAt" | "postId" | "imageUrl">;
		user: Pick<User, "username" | "profilePic">;
	};
	EditPost: { postId: number; caption?: string; imageUrl?: string };
	Likes: {
		postId: number;
	};
	Comments: CommentsPageParams;
	Profile: ProfilePageProps & {
		goBack?: () => void;
		showBackArrow?: boolean;
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
};

export type PostStackNavigationParams = {
	PostList: PostListParams;
	Comments: CommentsPageParams;
	Profile: ProfilePageProps & {
		goBack?: () => void;
		showBackArrow?: boolean;
	};
	EditPost: { postId: number; caption?: string; imageUrl?: string };
	Likes: {
		postId: number;
	};
};

export type TabNavigationParams = {
	Home: undefined;
	Explore: undefined;
	// Activity: undefined;
	New: undefined;
	Profile: undefined;
};

export type SignedOutStackParams = {
	Login: undefined;
	SwipeTabs: undefined;
};
