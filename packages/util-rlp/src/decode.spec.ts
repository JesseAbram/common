// Copyright 2017-2019 @polkadot/util-rlp authors & contributors
// This software may be modified and distributed under the terms
// of the MPL-2.0 license. See the LICENSE file for details.

import { hexToU8a, u8aToHex } from '@polkadot/util';

import { decode, encode } from '.';

import getTests from '../test/getTests';

const rlptests = getTests('RLPTests/rlptest.json');

describe('decode', () => {
  it('returns empty list for undefined inputs', () => {
    expect(
      decode()
    ).toEqual(
      new Uint8Array([])
    );
  });

  it('returns empty list for empty inputs', () => {
    expect(
      decode(new Uint8Array())
    ).toEqual(
      new Uint8Array([])
    );
  });

  rlptests.forEach(({ name, output }) => {
    it(`passes official ${name}`, () => {
      expect(
        u8aToHex(
          encode(
            decode(
              hexToU8a(output)
            )
          )
        )
      ).toEqual(output);
    });
  });
});
