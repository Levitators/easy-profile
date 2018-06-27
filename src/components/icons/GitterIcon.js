import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/SvgIcon';

let GitterIcon = (props) => (
    <SvgIcon {...props} viewBox="0 0 24 24">
        <path d="M8.501 4.001H10.5V24H8.501V4.001zm6.999 0V24h-2V4.001h2zM3.5 0h2.001v15H3.5V0zm15 4.001h2V15h-2V4.001z" />
    </SvgIcon>
);
GitterIcon = pure(GitterIcon);
GitterIcon.displayName = 'GitterIcon';
GitterIcon.muiName = 'SvgIcon';

export default GitterIcon;
