import { render, screen, fireEvent } from '@testing-library/react';
import UploadWidget from "../components/dashboard/cloudinary/UploadWidget";

test('should open upload modal', () => {
    const onUpload = jest.fn();
    const children = jest.fn();
    render(<UploadWidget onUpload={onUpload}>{children}</UploadWidget>);

    fireEvent.click(screen.getByText('Open Upload Modal'));

    expect(children).toHaveBeenCalledTimes(1);
    expect(children).toHaveBeenCalledWith(expect.objectContaining({ open: expect.any(Function) }));

    expect(children.mock.calls[0][0].open).toHaveBeenCalledTimes(1);
});