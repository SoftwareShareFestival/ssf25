import React, { Ref } from 'react';
import { FlexProps, Flex } from '../flex';

export default function VStack(props: FlexProps & { ref?: Ref<any> }) {
    const { ref, ...rest } = props;
    return <Flex ref={ref} direction="column" {...rest} />;
}