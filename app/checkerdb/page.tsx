import { UserService } from "@/services/user/userService";

export default function Home() {
  let userService: UserService = new UserService();

  const checker = async function() {
    userService.createUser('pc','pc1@gmail.com','pc1','pcavatar','pc1');
  }

  checker();

  return <></>
}
