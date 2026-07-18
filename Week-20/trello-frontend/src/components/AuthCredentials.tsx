import { Button } from "./Button";
import { Center } from "./Center";
import { Input } from "./input";;

export function AuthCredentials() {
    return <div style={{minHeight: "100vh", alignItems: "center", display: "flex"}}>
        <div style={{width: "100%"}}>
            <Center>
                <div style={{fontSize: 30}}>
                    Log in inti Trello
                </div>
            </Center>
            <Center>
                Connect to trello with.
            </Center>
            <Center>
                <Input type="text" placeholder="Email" />
            </Center>
            <Center>
                <Input type="password" placeholder="Password"/>
            </Center>
            <Center>
                <Button rigthIcon={<img style={{height:20}} src="https://similarpng.com/_next/image?url=https%3A%2F%2Fimage.similarpng.com%2Ffile%2Fsimilarpng%2Fvery-thumbnail%2F2020%2F06%2FLogo-google-icon-PNG.png&w=3840&q=75" />}>SignIn</Button>
            </Center>

        </div>
    </div>
}