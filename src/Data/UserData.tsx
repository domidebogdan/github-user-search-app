import { BuildableResource, Properties } from "tapi.js";
@Properties.Resource
export class UserData extends BuildableResource {
  @Properties.Alias("avatar_url")
  avatar: string = "";
  @Properties.Alias("name")
  name: string = "";
  @Properties.Alias("login")
  username: string = "notavailable";
  @Properties.Alias("created_at")
  joinDate: string = "Not Available";
  @Properties.Alias("bio")
  bioText: string = "This Profile has no bio";
  @Properties.Alias("public_repos")
  repos: number = 0;
  @Properties.Alias("followers")
  followers: number = 0;
  @Properties.Alias("following")
  following: number = 0;
  @Properties.Alias("location")
  location: string = "Not Available";
  @Properties.Alias("twitter_username")
  twitter: string = "Not Available";
  @Properties.Alias("blog")
  website: string = "Not Available";
  @Properties.Alias("company")
  company: string = "Not Available";

  constructor() {
    super();
  }
}
export default UserData;
