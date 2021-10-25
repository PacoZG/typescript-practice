import React from "react";
import Celeb from "./Celeb";
import { Grid, Button } from "semantic-ui-react";
import { CelebrityTypes } from "../types";
import store from "../store";

const CelebsList: React.FC<{ celebrities: Array<CelebrityTypes> }> = ({ celebrities }) => {
  return (
    <div>
      {celebrities.map((celeb) => (
        <div key={celeb.id} className={"celeb"}>
          <Celeb celeb={celeb} />

          <Grid>
            <Grid.Column floated="left" width={5}>
              <Button onClick={() => store.removeCeleb(celeb.id)}>Remove</Button>
            </Grid.Column>
          </Grid>
        </div>
      ))}
    </div>
  );
};

export default CelebsList;
