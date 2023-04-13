import OneSignal from "react-native-onesignal";

export function tagUserEmailCreate(email: string){
    // OneSignal.sendTag("user_email:", email);
    OneSignal.deleteTag("user_email:");

}

type TagUserInfoCreateProps = {
    name: string;
    email: string;
}

export function tagUserInfoCreate({name, email}: TagUserInfoCreateProps){
    OneSignal.sendTags({
        "user_name": name,
        "user_email": email
    });
}