import { useContext } from "react";
import { AuthContext } from "../hoc/AuthProvider";

export function UseAuth () {
    return useContext(AuthContext);
}