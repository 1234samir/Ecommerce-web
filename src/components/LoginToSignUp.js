import React from "react";
import Grid from "@mui/material/Grid";
// import Link from "@mui/material/Link";
import { Route, Routes, Link } from "react-router-dom";
import SignUp from "./SignUp";

export default function LoginToSignUp() {
  return (
    <div>
      <Grid item>
        <Link to='/signup' variant='body2'>
          {"Don't have an account? Sign Up"}
        </Link>
      </Grid>
    </div>
  );
}

// there are Link from MUI and react-router-dom !!!
// problem is i can wrap it with Link.
// import React from "react";
// import Grid from "@mui/material/Grid";
// import Link from "@mui/material/Link";

// export default function LoginToSignUp() {
//   return (
//     <div>
//       <Grid item>
//         <Link href='#' variant='body2'>
//           {"Don't have an account? Sign Up"}
//         </Link>
//       </Grid>
//     </div>
//   );
// }
