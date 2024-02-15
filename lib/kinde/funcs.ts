import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"

const {getPermission, isAuthenticated, getUser} =  getKindeServerSession()


export const getCurrUserAdminStatus = async () : Promise<boolean> => {
    const canAccept = await getPermission("accept:post");
    const canReject = await getPermission("reject:post");
    const canDeleteAny = await getPermission("delete:anypost");
    const canEditAny = await getPermission("edit:anypost");
    const isAdmin = [canAccept, canReject, canDeleteAny, canEditAny].every((t) => t?.isGranted === true);

    return isAdmin
}


export const getCurrAuthStatus = async () => {
    const isLogged = await isAuthenticated();

    return isLogged
}

export const getCurrUser = async () => {
    return await getUser();
}