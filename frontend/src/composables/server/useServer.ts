
import { environment } from "@/environments/environment";
import axios from "axios";
import { ref } from "vue";

export function useServer() {
    let status = ref<string>("");

    async function getStatus(): Promise<string> {
        const response = await axios.get(environment.baseUrl);
        return status.value;
    }    


}