import { Grid, GridColumn } from '@atlaskit/page';
import React from 'react';

export default ({ children }) => (
  <Grid>
    <GridColumn>
      <div className="mt-4 mb-8 pb-6">{children}</div>
    </GridColumn>
  </Grid>
)