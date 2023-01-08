import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

interface ICustomBreadcrumbs {
  tabName: string;
  icon?: React.ReactNode;
}

const CustomBreadcrumbs = ({
  tabName,
  icon,
}: ICustomBreadcrumbs) => {

  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" sx={{ display: 'flex', alignItems: 'center' }} color="inherit" href="/">
          <HomeOutlinedIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          {"Dashboard"}
        </Link>
        <Typography sx={{ display: 'flex', alignItems: 'center' }} color="text.primary">
          {icon}
          {tabName}
        </Typography>
      </Breadcrumbs>
    </div>
  );
}
export default CustomBreadcrumbs;
