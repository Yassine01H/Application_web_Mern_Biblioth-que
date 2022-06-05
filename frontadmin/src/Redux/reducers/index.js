import { combineReducers } from "redux";
import livresReducers from "./livresReducer";
import specialiteReducers from "./specialitesReducer";
import editeursReducers from "./editeursReducer";
import auteursReducers from "./auteursReducer";
const rootReducer= combineReducers({
 alllivres:livresReducers,
 allspecialites:specialiteReducers,
 allediteurs:editeursReducers,
 allauteurs:auteursReducers,
});
export default rootReducer